import Head from "next/head";
import { useEffect } from "react";
import NavBar from "../components/Navbar";
import Seo from "../components/Seo";

export default function About() {
  useEffect(() => {});
  return (
    <div>
      <Seo pageNm="About" />
      <p>About</p>
    </div>
  );
}
