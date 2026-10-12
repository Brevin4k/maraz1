/**
 * Armazenamento local de alta capacidade para fotos e vídeos enviados do celular
 * Utiliza IndexedDB nativo do navegador para suportar arquivos de vídeo pesados sem estourar o limite do localStorage.
 */

const DB_NAME = "AurumClinicMediaDB";
const STORE_NAME = "mediaFiles";
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      return reject(new Error("IndexedDB não suportado"));
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveMediaFile(key: string, file: File | Blob): Promise<string> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const putReq = store.put(file, key);

      putReq.onsuccess = () => {
        const objectUrl = URL.createObjectURL(file);
        resolve(objectUrl);
      };
      putReq.onerror = () => reject(putReq.error);
    });
  } catch (err) {
    console.error("Erro ao salvar mídia no IndexedDB:", err);
    // Fallback: converter em DataURL
    return fileToDataUrl(file);
  }
}

export async function getMediaFileUrl(key: string): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const getReq = store.get(key);

      getReq.onsuccess = () => {
        const result = getReq.result;
        if (result && result instanceof Blob) {
          resolve(URL.createObjectURL(result));
        } else if (typeof result === "string") {
          resolve(result);
        } else {
          resolve(null);
        }
      };
      getReq.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export function fileToDataUrl(file: File | Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
