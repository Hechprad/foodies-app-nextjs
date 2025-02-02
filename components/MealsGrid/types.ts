export type Meal = {
  creator: string;
  creator_email: string;
  id: number;
  image: string;
  instructions: string;
  slug: string;
  summary: string;
  title: string;
};

export type MealsGridProps = {
  meals: Array<Meal>;
};
