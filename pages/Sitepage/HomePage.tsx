import { NextPage } from "next";
import React from "react";
import FeaturedBrands from "../Components/FeaturedBrands";
import FeaturedProducts from "../Components/FeaturedProducts";
import HomeBanner from "../Components/HomeBanner";

const HomePage: NextPage = () => {
  return (
    <>
      <HomeBanner />
      <FeaturedProducts />
      <FeaturedBrands />
    </>
  );
};
export default HomePage;
