import { useState } from "react";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <p className="active">Home</p>
      <span>Span Text :: HOME</span>
    </div>
  );
}
