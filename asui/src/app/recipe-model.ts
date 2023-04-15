export interface Recipe {
  id: number;
  title: string;
  ingredients: Ingredient[];
  description: string;
  reviews: number;
  rating: number;
  author_id: number;
  difficulty: string;
  prep_time: number;
  cook_time: number;
  servings: string;
  img_url: string;
}

export interface Ingredient {
  id: number;
  name: string;
  units: string;
  quantity: string;
}

export const recipes = [
  {
    id: 1,
    title: "Spaghetti",
    ingredients: [{
        id: 0,
        name: "tomato",
        units: "pcs",
        quantity: "2"
      },
      {
        id: 1,
        name: "spaghetti",
        units: "grams",
        quantity: "200"
      }] as Ingredient[],
    description: "best recipe for spaghetti",
    reviews: 5,
    rating: 4.2,
    author_id: 1,
    difficulty: "easy",
    prep_time: 10,
    cook_time: 20,
    servings: "2 to 3",
    img_url: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ee869d9b-c90f-459d-b7e3-69ab3df03256.jpg"
  },
]

