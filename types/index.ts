export interface Recipe {
  id: number;
  slug: string;
  description: string;
  name: string;
  thumbnail_url: string;
  instructions: [
    {
      id: number;
      display_text: string;
    }
  ];
  sections: [
    {
      components: [
        {
          raw_text: string;
          id: number;
        }
      ];
    }
  ];
}

export interface RecipeDetails {
  id: number;
  thumbnail_url: string;
  name: string;
  description: string;
  instructions: [
    {
      display_text: string;
      id: number;
    }
  ];
  sections: [
    {
      components: [
        {
          id: number;
          raw_text: string;
        }
      ];
    }
  ];
}

export interface SwitchProps {
  instructions: [
    {
      display_text: string;
      id: number;
    }
  ];
  sections: [
    {
      components: [
        {
          id: number;
          raw_text: string;
        }
      ];
    }
  ];
}

export interface Recipes {
  recipes: Recipe[];
}
