import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Contact />
      
      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/91XXXXXXXXXX"
        className="fixed bottom-20 right-6 md:bottom-10 md:right-10 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 md:hidden" 
      >
        <MessageCircle size={24} fill="white" />
      </Link>
    </main>
  );
}
