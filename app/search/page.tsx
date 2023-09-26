"use client";

import { useState } from "react";
import { Search, Loader, ChefHat } from "lucide-react";
import { Recipe } from "@/types";
import { url, options } from "@/lib/utils";
import { RecipeBlock } from "@/components";

export default function Page() {
  const [data, setData] = useState<Recipe[] | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent, search: string) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${url}&q=${search}`, options);
      const result = await response.json();
      setData(result?.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[90vw] mx-auto py-10 flex flex-col gap-10">
      <div className="w-full flex justify-between items-center">
        <p className="text-2xl font-[600] hidden md:inline">Search</p>
        <form
          className="w-full md:w-[300px] flex items-center gap-1 px-4 py-2 border border-[#121212] rounded-full"
          onSubmit={(e) => handleSearch(e, search)}
        >
          <Search size="15px" />
          <input
            className="bg-transparent border-none outline-none grow"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </div>
      {!data && !loading ? (
        <div className="w-full h-[70vh] flex justify-center items-center flex-col gap-2">
          <ChefHat size="40px" className="opacity-40" />
          <p className="opacity-40">What are you looking for?</p>
        </div>
      ) : loading ? (
        <div className="w-full h-[70vh] grid place-items-center">
          <Loader size="15px" className="animate-spin" />
        </div>
      ) : (
        data && (
          <div className="w-full grid place-items-start gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
            {data?.map((recipe) => (
              <RecipeBlock key={recipe?.id} {...recipe} />
            ))}
          </div>
        )
      )}
    </div>
  );
}
