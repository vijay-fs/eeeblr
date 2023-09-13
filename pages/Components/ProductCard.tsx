import Image from "next/image";
function ProductCard(props: any) {
  return (
    <div className="w-80 bg-orange-500 rounded-tl-3xl rounded-tr-3xl pb-8 mx-auto">
      <p className="text-base text-white font-sans font-bold text-center pt-4">
        {props.name}
      </p>
      <div className="pt-4 pl-4 pr-4 rounded-3xl">
        <Image
          src={props.img}
          alt="dummyimg"
          className="rounded-3xl"
          width={400}
          height={400}
        />
      </div>
      <div className="flex">
        <div className="pl-4 font-sans pt-2 pb-2 w-24 bg-orange-300 ml-8 mt-6 ">
          <button className="text-cente">Buy Now</button>
        </div>
        <div className="font-sans bg-orange-300 mt-6 pt-2 pl-4 pr-4 ml-1">
          <button className="text-center">Related Products</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
