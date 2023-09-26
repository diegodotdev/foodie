import { fetchRecipe, fetchSimilarRecipes } from "@/lib/requests";
import { RecipeDetails, Recipe } from "@/types";
import { SimilarRecipes, Switch } from "@/components";

export default async function Page({ params }: { params: { id: number } }) {
  const data: RecipeDetails = await fetchRecipe(params?.id);
  const similarData: Recipe[] = await fetchSimilarRecipes(params?.id);

  return (
    <>
      <div className="w-[90vw] flex flex-col py-10 mx-auto lg:flex-row">
        <div className="w-full lg:w-1/2 min-h-[70vh] flex justify-start items-center gap-5 flex-col">
          <p className="text-2xl font-[600]">{data?.name}</p>
          <img
            src={data?.thumbnail_url}
            alt={data?.name}
            className="w-full lg:w-4/5 h-[250px] rounded-lg object-cover"
          />
          {data?.description && (
            <p className="w-full lg:w-4/5">
              <span className="font-[600]">Description</span>:{" "}
              {data?.description}
            </p>
          )}
        </div>
        <Switch instructions={data?.instructions} sections={data?.sections} />
      </div>
      <SimilarRecipes recipes={similarData} />
    </>
  );
}
