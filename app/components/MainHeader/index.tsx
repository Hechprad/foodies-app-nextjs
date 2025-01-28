import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import Background from "@/app/components/MainHeader/components/Background";

import classes from "./index.module.css";

export default function MainHeader() {
  return (
    <>
      <Background />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image alt="A plate with food on it" src={logoImg} priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
