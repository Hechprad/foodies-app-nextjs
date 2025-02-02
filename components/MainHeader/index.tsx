import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import Background from "@/components/MainHeader/components/Background";
import NavLink from "@/components/MainHeader/components/NavLink";

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
