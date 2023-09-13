import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { brands } from "../api/brands";
import Image from "next/image";

function FeaturedBrands() {
  // const [isDesktop, setDesktop] = useState(
  //   window.matchMedia("(min-width: 790px)").matches
  // );
  // const updateMedia = () => {
  //   setDesktop(window.matchMedia("(min-width: 790px)").matches);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", updateMedia);
  //   return () => window.removeEventListener("resize", updateMedia);
  // });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 6,
    slidesPerRow: 1,
  };

  return (
    <div className="mb-10 md:mb-20s mx-auto">
      <div className="">
        <h1 className="text-center md:text-2xl md:font-bold md:mb-20">
          Featured Brands
        </h1>
      </div>

      {/* <div className="mx-auto"> */}
      {/* <div className="auto-rows-auto justify-items-start"> */}
      <div className="flex flex-col md:flex-row md:flex-wrap mx-auto md:mx-20">
        {brands.map((item) => (
          <div className="object-cover mx-auto md:p-10" key={item.id}>
            <Image
              className=""
              src={item.src}
              alt={item.alt}
              width={150}
              height={75}
            />
          </div>
        ))}
      </div>
      {/* <Slider {...settings}>
            {brands.map((item) => (
              <div className="object-cover ml-20 pl-12 mx-auto" key={item.id}>
                <Image src={item.src} alt={item.alt} width={150} height={75} />
              </div>
            ))}
          </Slider> */}
      {/* </div> */}
    </div>
  );
}
export default FeaturedBrands;
