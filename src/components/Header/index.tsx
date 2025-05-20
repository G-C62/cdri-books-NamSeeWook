"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Body1, Title1 } from "../Typography";
import styles from "./index.module.css";

const MENUS = [
  { label: "도서 검색", href: "/books" },
  { label: "내가 찜한 책", href: "/books/like" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.headerWrap}>
      <div className={styles.logo}>
        <Title1>CERTICOS BOOKS</Title1>
      </div>
      <nav className={styles.menuWrap}>
        {MENUS.map((menu) => {
          const isActive = pathname === menu.href;
          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={styles.menuItem}
            >
              <Body1 className={isActive ? styles.active : undefined} color={isActive ? "primary" : "secondary"}>
                {menu.label}
              </Body1>
            </Link>
          );
        })}
      </nav>
    </header>
  );
} 