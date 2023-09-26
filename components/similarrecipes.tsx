"use client";

import { Recipes } from "@/types";
import { RecipeBlock } from ".";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { breakpoints } from "@/lib/utils";

export default function SimilarRecipes({ recipes }: Recipes) {
  return (
    <div className="w-[90vw] mx-auto pb-10 flex flex-col gap-10">
      <div className="w-full flex justify-between items-center">
        <p className="text-2xl font-[600]">Similar</p>
        <p className="opacity-70">Swipe</p>
      </div>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={10}
        className="w-[90vw]"
        loop
      >
        {recipes?.map((recipe) => (
          <SwiperSlide key={recipe?.id}>
            <RecipeBlock {...recipe} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
