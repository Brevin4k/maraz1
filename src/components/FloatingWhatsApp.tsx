import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "../data/initialClinicData";

interface FloatingWhatsAppProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  whatsappNumber,
  whatsappMessage,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const waLink = createWhatsAppLink(whatsappNumber, whatsappMessage);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe somente após o usuário rolar além da tela inicial
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 transition-all duration-300">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 pl-3 pr-3.5 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Falar conosco no WhatsApp"
      >
        {/* Pulse ring effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <div className="w-5 h-5 flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-white" />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[9px] leading-none uppercase tracking-wider text-white/90 font-medium">
            Online Agora
          </span>
          <span className="text-[11px] font-bold leading-tight text-white">
            Fale Conosco
          </span>
        </div>
      </a>
    </div>
  );
};
