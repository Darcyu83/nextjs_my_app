import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
import vercelPath from "../public/vercel.svg";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      {/* <img src="./vercel.svg" alt="log" /> */}
      <Image src={vercelPath} alt="Vercel" />
      <Link style={{ textDecoration: "none" }} href="/">
        <p className={router.pathname === "/" ? "active" : undefined}>Home</p>
      </Link>
      <Link href="/about">
        <p className={router.pathname === "/about" ? "active" : undefined}>
          About
        </p>
      </Link>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-evenly;
          background-color: dodgerblue;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
