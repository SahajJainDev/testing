"use client";

import { ExternalLink, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Contact Info */}
        <div className="flex-1 space-y-8">
          <h2 className="font-heading text-3xl text-white mb-8">Visit Us</h2>
          
          <div className="space-y-4 text-gray-400 font-light">
            <p>Nailovy</p>
            <p>Khajaguda, Hyderabad</p>
            <p>Telangana, India</p>
          </div>

          <div className="pt-8">
            <Link 
               href="https://api.whatsapp.com/send?phone=917075839900" 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-accent border-b border-accent pb-1 hover:opacity-80 transition-opacity"
            >
              <MessageCircle size={18} />
              <span>Chat to Book</span>
            </Link>
          </div>
          
          <div className="pt-4">
             <Link 
               href="https://instagram.com/nailovy_hyd" 
               className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
              <span>@nailovy_hyd</span>
            </Link>
          </div>
        </div>

        {/* Map Placeholder - Grayscale styled */}
        <div className="flex-1 h-[300px] w-full bg-white/5 rounded-lg overflow-hidden relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.857367809627!2d78.36647231487676!3d17.41865998805988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9429188d3dcd%3A0xc3124479e0000000!2sKhajaguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1676645855599!5m2!1sen!2sin&maptype=roadmap&style=feature:all|element:all|saturation:-100|visibility:simplified"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-70 hover:opacity-100 transition-opacity duration-500"
          ></iframe>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/5 text-center text-xs text-white/40">
        <a href="mailto:sahajjain78@gmail.com" className="hover:text-white/70 transition-colors">
          © 2026 Nailovy. Designed for elegance.
        </a>
      </footer>
    </section>
  );
}
