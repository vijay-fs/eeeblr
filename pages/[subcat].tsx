import next from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { data } from "./api/data";
import ProductCard from "./Components/ProductCard";

export default function Books() {
  // interface categorypage {
  //   bookid: string; // 👈️ use string lowercase s
  //   cat: string;
  //   catkey: string;
  // }
  const [heading, setHeading] = useState();
  const router = useRouter();
  const {
    query: { subcat, category },
  } = router;
  const decodedCategory = decodeURIComponent(category);
  const decodedSubcat = decodeURIComponent(subcat);

  const [featProds, setFeatProds] = useState([] as any);
  const Products = () => {
    Object.keys(data).forEach((cat) => {
      if (cat === category) {
        Object.values(data[cat]).forEach((catkey) => {
          if (Object.keys(catkey)[0] === subcat) {
            setFeatProds(Object.values(catkey)[0]);
            // router.push({
            //   pathname: `/${decodedCategory}/${decodedSubcat}`,
            // });
          }
        });
      }
    });
  };
  useEffect(() => {
    Products();
    setHeading(subcat);
  }, [subcat]);

  return (
    <>
      <p className="font-sans font-bold text-center mb-10">{heading}</p>
      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {featProds.map((prod: any) => (
          <ProductCard
            img={prod.prodImg}
            name={prod.prodName}
            key={prod.prodId}
          />
        ))}
      </div>
    </>
  );
}
