export const fetchRecipes = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes`
  );
  const result = await response.json();
  return result;
};

export const fetchRecipe = async (id: number | undefined) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes/${id}`
  );
  const result = await response.json();
  return result;
};

export const fetchSimilarRecipes = async (id: number | undefined) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/similar/${id}`
  );
  const result = await response.json();
  return result;
};
