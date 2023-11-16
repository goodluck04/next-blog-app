"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  const session = useSession();
  const pathName = usePathname();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Goodluck
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={pathName === link.url ? styles.currentLink : styles.link} >
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button onClick={signOut} className={styles.logout}>
            Logut Out
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
