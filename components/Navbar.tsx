import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  console.log(
    [router.pathname === "/about" ? styles.active : undefined].join(" ")
  );
  return (
    <nav className={styles.nav}>
      <Link style={{ textDecoration: "none" }} href="/">
        <p className={router.pathname === "/" ? "active" : undefined}>Home</p>
      </Link>
      <Link style={{ textDecoration: "none" }} href="/about">
        <p className={router.pathname === "/about" ? "active" : undefined}>
          About
        </p>
      </Link>

      <style jsx>{`
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
