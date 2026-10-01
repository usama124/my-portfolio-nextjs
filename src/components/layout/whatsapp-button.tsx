import React from "react";
import { profileData } from "@/data/profile";

export function WhatsAppButton() {
  return (
    <a
      href={profileData.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat directly on WhatsApp with Usama Tahir"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-lg shadow-emerald-950/40 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
    >
      <span className="sr-only">Chat on WhatsApp</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 group-hover:rotate-6 transition-transform"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.88 11.88 0 0012 .25C5.73.25.99 4.99.99 11.26c0 1.98.52 3.92 1.5 5.64L.1 23.75l6.99-1.81a11.93 11.93 0 005.9 1.52h.01c6.27 0 11.01-4.74 11.01-11.01 0-3.02-1.18-5.85-3.48-7.67zM12 21.5c-1.86 0-3.66-.5-5.22-1.44l-.37-.23-4.16 1.08 1.12-3.99-.24-.4A9.18 9.18 0 012.82 11.26c0-5.03 4.09-9.12 9.12-9.12 2.44 0 4.73.95 6.45 2.67A8.98 8.98 0 0121 11.26c0 5.03-4.09 9.12-9 9.12z" />
        <path d="M17.58 14.13c-.29-.14-1.71-.84-1.98-.93-.27-.09-.47-.14-.67.14-.2.29-.77.93-.95 1.12-.17.2-.34.22-.63.08-.29-.14-1.23-.45-2.34-1.45-.87-.78-1.45-1.74-1.62-2.03-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.51-.07-.14-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.19 0-.5.07-.76.37-.27.29-1.03 1.01-1.03 2.46 0 1.44 1.05 2.84 1.2 3.04.14.2 2.07 3.36 5.02 4.71 2.95 1.36 2.95.91 3.48.85.53-.07 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.13-.27-.2-.57-.34z" />
      </svg>
    </a>
  );
}

