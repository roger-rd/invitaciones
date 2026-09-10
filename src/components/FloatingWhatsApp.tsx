import { MessageCircle } from "./icons";

interface FloatingWhatsAppProps {
  phone: string;
  message: string;
}

export default function FloatingWhatsApp({ phone, message }: FloatingWhatsAppProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
