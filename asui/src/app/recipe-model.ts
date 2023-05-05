export interface Recipe {
  id: number;
  title: string;
  ingredients: Ingredient[];
  directions: Direction[];
  reviews: number;
  average_rating: number;
  author: number;
  difficulty: string;
  prep_time: number;
  cook_time: number;
  servings: string;
  photo: string;
}

export interface Review {
  user_id: number;
  recipe_id: number;
  rating: number;
}

export interface Ingredient {
  id: number;
  name: string;
  units: string;
  quantity: string;
  isChecked?: boolean;
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
    average_rating: 4.2,
    author: 1,
    difficulty: "easy",
    prep_time: 10,
    cook_time: 20,
    servings: "2 to 3",
    photo: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ee869d9b-c90f-459d-b7e3-69ab3df03256.jpg"
  },
  {
    id: 2,
    title: "Ragout",
    ingredients: [{
      id: 2,
      name: "onion",
      units: "pcs",
      quantity: "3"
    },
      {
        id: 3,
        name: "potato",
        units: "pcs",
        quantity: "5"
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
    reviews: 20,
    average_rating: 3.5,
    author: 2,
    difficulty: "easy",
    prep_time: 10,
    cook_time: 20,
    servings: "2 to 3",
    photo: "https://assets.bonappetit.com/photos/57ae09011b334044149759a0/master/w_940,h_510,c_limit/classic-ragu-bolognese.jpg"
  },
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
    average_rating: 4.2,
    author: 1,
    difficulty: "easy",
    prep_time: 10,
    cook_time: 20,
    servings: "2 to 3",
    photo: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ee869d9b-c90f-459d-b7e3-69ab3df03256.jpg"
  },
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
    average_rating: 4.2,
    author: 1,
    difficulty: "easy",
    prep_time: 10,
    cook_time: 20,
    servings: "2 to 3",
    photo: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ee869d9b-c90f-459d-b7e3-69ab3df03256.jpg"
  },
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
    average_rating: 4.2,
    author: 1,
    difficulty: "easy",
    prep_time: 10,
    cook_time: 20,
    servings: "2 to 3",
    photo: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ee869d9b-c90f-459d-b7e3-69ab3df03256.jpg"
  },
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
    average_rating: 4.2,
    author: 1,
    difficulty: "easy",
    prep_time: 10,
    cook_time: 20,
    servings: "2 to 3",
    photo: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ee869d9b-c90f-459d-b7e3-69ab3df03256.jpg"
  },
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
    average_rating: 4.2,
    author: 1,
    difficulty: "easy",
    prep_time: 10,
    cook_time: 20,
    servings: "2 to 3",
    photo: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ee869d9b-c90f-459d-b7e3-69ab3df03256.jpg"
  },
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
    average_rating: 4.2,
    author: 1,
    difficulty: "easy",
    prep_time: 10,
    cook_time: 20,
    servings: "2 to 3",
    photo: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ee869d9b-c90f-459d-b7e3-69ab3df03256.jpg"
  },

]
