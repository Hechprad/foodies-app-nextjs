import Link from "next/link";

import MealsGrid from "@/components/MealsGrid";

import classes from "./page.module.css";

export default function MealsPAge() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid
          meals={[
            {
              creator: "Chef Hiroshi",
              id: 1,
              image:
                "https://i.pinimg.com/736x/1a/2b/3c/1a2b3c4d5e6f7g8h9i0j.jpg", // Ramen estilo Ghibli
              slug: "ramen",
              summary:
                "A flavorful Japanese noodle soup with rich broth and toppings.",
              title: "Ramen",
            },
            {
              creator: "Chef Aiko",
              id: 2,
              image:
                "https://i.pinimg.com/736x/2b/3c/4d/2b3c4d5e6f7g8h9i0j1k.jpg", // Onigiri estilo Ghibli
              slug: "onigiri",
              summary:
                "A traditional Japanese rice ball, often wrapped in nori.",
              title: "Onigiri",
            },
            {
              creator: "Chef Tanaka",
              id: 3,
              image:
                "https://i.pinimg.com/736x/3c/4d/5e/3c4d5e6f7g8h9i0j1k2l.jpg", // Yakisoba estilo Ghibli
              slug: "yakisoba",
              summary: "Stir-fried Japanese noodles with vegetables and meat.",
              title: "Yakisoba",
            },
            {
              creator: "Chef Mario",
              id: 4,
              image:
                "https://i.pinimg.com/736x/4d/5e/6f/4d5e6f7g8h9i0j1k2l3m.jpg", // Pizza de Pepperoni estilo Ghibli
              slug: "pizza-pepperoni",
              summary:
                "A classic Italian pizza topped with spicy pepperoni slices.",
              title: "Pepperoni Pizza",
            },
            {
              creator: "Chef André",
              id: 5,
              image:
                "https://i.pinimg.com/736x/5e/6f/7g/5e6f7g8h9i0j1k2l3m4n.jpg", // Strogonoff estilo Ghibli
              slug: "strogonoff",
              summary:
                "A creamy and savory Brazilian-Russian dish with beef and mushrooms.",
              title: "Strogonoff",
            },
            {
              creator: "Chef Nakamura",
              id: 6,
              image:
                "https://i.pinimg.com/736x/6f/7g/8h/6f7g8h9i0j1k2l3m4n5o.jpg", // Tempura estilo Ghibli
              slug: "tempura",
              summary:
                "Lightly battered and deep-fried seafood and vegetables.",
              title: "Tempura",
            },
            {
              creator: "Chef Sato",
              id: 7,
              image:
                "https://i.pinimg.com/736x/7g/8h/9i/7g8h9i0j1k2l3m4n5o6p.jpg", // Sushi estilo Ghibli
              slug: "sushi",
              summary:
                "A Japanese dish of vinegared rice paired with fresh seafood.",
              title: "Sushi",
            },
          ]}
        />
      </main>
    </>
  );
}
