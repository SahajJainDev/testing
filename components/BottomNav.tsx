"use client";

import { Home, Sparkles, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "#services", icon: Sparkles },
  { name: "Contact", href: "#contact", icon: MapPin },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
      <nav className="mx-auto max-w-md bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg px-6 py-3 flex justify-between items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href; // Simple check, might need intersection observer for hash links active state

          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex flex-col items-center gap-1 transition-colors duration-300",
                isActive ? "text-accent" : "text-gray-400 hover:text-white"
              )}
            >
              <Icon size={20} strokeWidth={1.5} />
              <span className="text-[10px] font-medium tracking-wide">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
