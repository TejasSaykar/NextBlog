"use client";

import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import Darkmode from "../Darkmode/Darkmode";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const link = [
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
      title: "Login",
      url: "/dashboard/login",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        tejblog
      </Link>
      <div className={styles.links}>
        <Darkmode />
        {link.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button
          onClick={() => console.log("Logged out")}
          className={styles.logout}
        >
          Logouts
        </button>
      </div>
    </div>
  );
};

export default Navbar;
