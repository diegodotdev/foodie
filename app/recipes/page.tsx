import { fetchRecipes } from "@/lib/requests";
import { RecipeBlock } from "@/components";
import { Recipe } from "@/types";

export default async function Page() {
  const data: Recipe[] = await fetchRecipes();

  return (
    <div className="w-[90vw] mx-auto py-10 flex flex-col gap-10">
      <p className="text-2xl font-[600]">Featured</p>
      <div className="w-full grid place-items-start gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
        {data?.map((recipe) => (
          <RecipeBlock key={recipe?.id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
