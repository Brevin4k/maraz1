import React from "react";
import { Sparkles, MapPin, Clock, Phone, MessageCircle, Lock } from "lucide-react";
import { createWhatsAppLink } from "../data/initialClinicData";

interface FooterProps {
  clinicName: string;
  address: string;
  phone: string;
  openingHours: string;
  whatsappNumber: string;
  whatsappMessage: string;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  clinicName,
  address,
  phone,
  openingHours,
  whatsappNumber,
  whatsappMessage,
  onOpenCustomizer,
}) => {
  const waLink = createWhatsAppLink(whatsappNumber, whatsappMessage);

  return (
    <footer className="w-full bg-stone-950 text-white pt-14 pb-24 px-4 border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Background ambient gold gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto space-y-8 text-center sm:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-1.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] flex items-center justify-center text-stone-950 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-stone-950 fill-stone-950" />
            </div>
            <span className="font-serif text-lg sm:text-xl font-semibold tracking-wider text-white">
              {clinicName}
            </span>
          </div>
          <p className="text-[11px] text-stone-400 font-light max-w-sm">
            Medicina estética avançada, excelência técnica e elegância em cada detalhe.
          </p>
        </div>

        {/* Contact & Location Details */}
        <div className="grid grid-cols-1 gap-3 pt-2 border-t border-white/10 text-[11px] text-stone-300">
          <div className="flex items-start justify-center sm:justify-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
            <span>{address}</span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>{openingHours}</span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>Telefone: {phone}</span>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-stone-950 font-semibold text-[11px] uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#D4AF37]/20"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-stone-950 text-stone-950" />
            <span>Iniciar Atendimento no WhatsApp</span>
          </a>

          <button
            onClick={onOpenCustomizer}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-stone-400 hover:text-[#D4AF37] bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
          >
            <Lock className="w-3 h-3 text-[#D4AF37]" />
            <span>Área Administrativa</span>
          </button>
        </div>

        {/* Medical Disclaimers */}
        <div className="pt-5 border-t border-white/10 text-[9px] sm:text-[10px] text-stone-500 leading-relaxed text-center sm:text-left space-y-1.5">
          <p>
            Informações em conformidade com o Conselho Federal de Medicina (CFM) e Conselho Regional de Medicina (CRM). Este site tem caráter exclusivamente educativo e informativo.
          </p>
          <p>
            © {new Date().getFullYear()} {clinicName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
