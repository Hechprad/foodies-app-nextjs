"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./index.module.css";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={`${classes.link} ${
        currentPath.startsWith(href) ? classes.active : ""
      }`}
    >
      {children}
    </Link>
  );
}
