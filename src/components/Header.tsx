import React from "react";
import { MessageCircle, Settings2, Sparkles, PhoneCall } from "lucide-react";
import { createWhatsAppLink } from "../data/initialClinicData";

interface HeaderProps {
  clinicName: string;
  whatsappNumber: string;
  whatsappMessage: string;
  onOpenCustomizer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  clinicName,
  whatsappNumber,
  whatsappMessage,
  onOpenCustomizer,
}) => {
  const waLink = createWhatsAppLink(whatsappNumber, whatsappMessage);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-[#E8DFD3]/80 transition-all">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#996515] p-[1.5px] shadow-sm">
            <div className="w-full h-full bg-[#FAF9F6] rounded-full flex items-center justify-center text-[#B8860B] group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[15px] sm:text-base font-semibold tracking-wider text-stone-900 leading-none">
              {clinicName}
            </span>
            <span className="text-[9px] tracking-widest uppercase text-[#B8860B] font-medium mt-0.5">
              Medicina & Estética
            </span>
          </div>
        </a>

        {/* Actions Zone */}
        <div className="flex items-center gap-2">
          {/* Customizer button */}
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-stone-600 bg-stone-100 hover:bg-stone-200/80 rounded-full transition-colors active:scale-95"
            title="Personalizar fotos, WhatsApp e textos"
            aria-label="Abrir painel de edição"
          >
            <Settings2 className="w-3 h-3 text-[#B8860B]" />
            <span className="hidden sm:inline">Editar Conteúdo</span>
          </button>

          {/* Direct WhatsApp Call */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-xs hover:shadow transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
