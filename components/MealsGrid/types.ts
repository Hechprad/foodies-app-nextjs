export type Meal = {
  creator: string;
  id: number;
  image: string;
  slug: string;
  summary: string;
  title: string;
};

export type MealsGridProps = {
  meals: Array<Meal>;
};
