"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { useActiveStore } from "@/stores/activeStore";
import { cn } from "@/lib/utils";

export default function Menu() {
  const { initial, handleInitial } = useActiveStore();

  return (
    <div
      className={cn(
        "fixed bottom-0 right-0 w-full h-[88vh] z-10 duration-[.5s] bg-[#121212] flex flex-col justify-center items-center gap-10",
        initial ? "translate-y-0" : "translate-y-[100%]"
      )}
    >
      {navLinks.map((link) => (
        <Link key={link.id} href={link.href} onClick={handleInitial}>
          <span className="text-[#f0f0f0] text-2xl font-[600]">
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
