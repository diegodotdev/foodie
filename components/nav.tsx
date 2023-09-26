"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Yellowtail } from "next/font/google";
import Link from "next/link";
import { navLinks } from "@/constants";
import { X } from "lucide-react";

const pacifico = Yellowtail({ subsets: ["latin"], weight: ["400"] });

export default function Nav() {
  const [active, setActive] = useState(false);

  const handleLogo = () => {
    if (active) {
      setActive(!active);
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
        <button className="md:hidden" onClick={() => setActive(!active)}>
          <X
            size="15px"
            className={cn(
              "rotate-45 duration-[.5s]",
              active ? "rotate-0" : "rotate-45"
            )}
          />
        </button>
      </div>
      <div
        className={cn(
          "fixed bottom-0 right-0 w-full h-[88vh] bg-[#121212] duration-[.5s] flex flex-col gap-10 justify-center items-center md:hidden",
          active ? "translate-y-0" : "translate-y-[100%]"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            onClick={() => setActive(!active)}
          >
            <span className="text-[#f0f0f0] text-2xl font-[600]">
              {link.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
