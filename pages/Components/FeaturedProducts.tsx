import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { data } from "../api/data";

function FeaturedProducts() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  const [featProds, setFeatProds] = useState([] as any);
  const Products = () => {
    Object.values(data).forEach((cat) => {
      Object.values(cat).forEach((subcat) => {
        Object.values(subcat).forEach((prod: any, i) => {
          prod[i].prodFeat &&
            setFeatProds((featProds: any) => [prod[i], ...featProds]);
        });
      });
    });
  };
  useEffect(() => {
    Products();
  }, []);
  return (
    <div className="mt-20 mb-40 mx-auto">
      <h1 className="text-center md:text-2xl md:font-bold md:mb-20">
        FEATURED PRODUCTS
      </h1>
      <Slider {...settings}>
        {featProds.map((prod: any) => (
          <ProductCard
            img={prod.prodImg}
            name={prod.prodName}
            key={prod.prodName}
          />
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedProducts;
