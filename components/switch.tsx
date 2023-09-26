"use client";

import { useState } from "react";
import { SwitchProps } from "@/types";
import { cn } from "@/lib/utils";

export default function Switch({ instructions, sections }: SwitchProps) {
  const [active, setActive] = useState("ingredients");

  return (
    <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
      <div className="w-full lg:w-4/5 flex flex-col gap-10 mx-auto">
        <div className="w-full border border-[#121212] rounded-full overflow-hidden">
          <button
            className={cn(
              "w-1/2 py-2",
              active === "ingredients"
                ? "bg-[#121212] text-[#f0f0f0]"
                : "bg-[#f0f0f0] text-[#121212]"
            )}
            onClick={() => setActive("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={cn(
              "w-1/2 py-2",
              active === "instructions"
                ? "bg-[#121212] text-[#f0f0f0]"
                : "bg-[#f0f0f0] text-[#121212]"
            )}
            onClick={() => setActive("instructions")}
          >
            Instructions
          </button>
        </div>
        <div className="w-full flex flex-col gap-5">
          {active === "ingredients"
            ? sections[0]?.components?.map((item) => (
                <p key={item?.id}>· {item?.raw_text}</p>
              ))
            : instructions?.map((item, index) => (
                <p key={item?.id}>
                  {index + 1}. {item?.display_text}
                </p>
              ))}
        </div>
      </div>
    </div>
  );
}
