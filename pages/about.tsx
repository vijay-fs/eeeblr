import Image from "next/image";
import React from "react";
import AboutUsBannerMobile from "/public/images/AboutUsBannerMobile.png";
const About = () => {
  return (
    <div className="mx-8 my-8">
      <h2 className="font-bold text-center my-8">Aboutpage</h2>
      <div className="flex justify-center">
        <Image
          src={AboutUsBannerMobile}
          alt="banner"
          width={600}
          height={600}
        />
      </div>
      <div>
        <h3 className="font-semibold mt-4 text-lg text-center text-fuchsia-800">
          Who We Are
        </h3>
        <p className="text-justify font-medium mt-4">
          Excellent Engineering Enterprises is renowned not only for its genuine
          quality products, but also for its commitment towards providing best
          service to its customers.
        </p>
        <p className="text-justify font-medium mt-4">
          What sets us apart from the others is its ability to offer products in
          a wide variety to customers. With over 25 years of experience, the
          firm and its people, as a whole, have acquired in depth knowledge of
          Mechanical, Civil, Electrical, Construction and Structural Engineering
          and are hence able to understand the needs of the customer.
        </p>
      </div>
      <div>
        <h3 className="font-semibold mt-4 text-lg text-center text-fuchsia-800">
          Our Approach
        </h3>
        <p className="text-justify font-medium mt-4">
          Having been actively rendering reliable, resourceful, reasonable and
          efficient services professionally since last 25 years. We offer a host
          of items from off the shelf stocks which covers a wide range of
          products and make it available to our customers in a short span of
          time.
        </p>
        <p className="text-justify font-medium mt-4">
          We are able to achieve a role of being a vital source for offering
          range of products due to our valuable customers without whose
          patronage we could not have come up so fast.
        </p>
      </div>
    </div>
  );
};
export default About;
