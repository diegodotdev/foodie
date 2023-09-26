"use client";

import { useActiveStore } from "@/stores/activeStore";
import { cn } from "@/lib/utils";
import { Yellowtail } from "next/font/google";
import Link from "next/link";
import { navLinks } from "@/constants";
import { X } from "lucide-react";

const pacifico = Yellowtail({ subsets: ["latin"], weight: ["400"] });

export default function Nav() {
  const { initial, handleInitial } = useActiveStore();

  const handleLogo = () => {
    if (initial) {
      handleInitial();
    }
  };
  return (
    <div className="sticky top-0 right-0 z-10 w-full h-[12vh] grid place-items-center bg-[#121212] text-[#f0f0f0]">
      <div className="w-[90vw] flex justify-between items-center">
        <Link href="/" onClick={handleLogo}>
          <span className={cn(pacifico.className, "text-4xl")}>Foodie</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.id}>
              <span>{link.title}</span>
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={handleInitial}>
          <X size="15px" className="rotate-45" />
        </button>
      </div>
    </div>
  );
}
