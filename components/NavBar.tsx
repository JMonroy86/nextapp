import Link from "next/link";
import { FC } from "react";
import { ActiveLink } from "./ActiveLink";
import styles from './Navbar.module.css';


interface Item {
  text: string;
  href: string;
}

const menuItems: Item[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavBar: FC = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((item, key) => {
        const { text, href } = item;
        return <ActiveLink key={key} text={text} href={href} />;
      })}
    </nav>
  );
};
