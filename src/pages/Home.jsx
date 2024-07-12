import React from "react";
import Landing from "../components/Landing";
import Category from "../components/Category";
import Product from "../components/Product";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Category />
      <Product />
      <Team />
      <Footer />
    </>
  );
}
