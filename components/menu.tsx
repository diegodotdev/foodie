"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { useActiveStore } from "@/stores/activeStore";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export default function Menu() {
  const { initial, handleInitial } = useActiveStore();

  return (
    <div
      className={cn(
        "fixed bottom-0 right-0 w-full h-screen z-50 duration-[.5s] bg-[#121212] md:hidden",
        initial ? "translate-y-0" : "translate-y-[100%]"
      )}
    >
      <div className="w-[90vw] h-[12vh] flex justify-end items-center mx-auto">
        <button onClick={handleInitial}>
          <X size="15px" className="text-[#f0f0f0]" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 w-full h-[88vh]">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.href} onClick={handleInitial}>
            <span className="text-[#f0f0f0] text-2xl font-[600]">
              {link.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
