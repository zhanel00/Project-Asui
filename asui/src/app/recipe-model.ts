export interface Recipe {
  id: number;
  title: string;
  ingredients: Ingredient[];
  directions: Direction[];
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

export interface Direction {
  id: number;
  step: number;
  content: string;
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
    directions: [
      {
        id: 1,
        step: 1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        step: 2,
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 3,
        step: 3,
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        id: 4,
        step: 4,
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }] as Direction[],
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

