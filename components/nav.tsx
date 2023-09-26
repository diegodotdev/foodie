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

  return (
    <div className="w-full h-[12vh] grid place-items-center bg-[#121212] text-[#f0f0f0] relative">
      <div className="w-[90vw] flex justify-between items-center">
        <Link href="/">
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
          <X
            size="15px"
            className={cn("duration-[.5s]", initial ? "rotate-0" : "rotate-45")}
          />
        </button>
      </div>
    </div>
  );
}
