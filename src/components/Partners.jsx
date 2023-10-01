import React from "react";
import FlowerHead from "./FlowerHead";
import brands from "@/../public/images/image 2.png";
import brands1 from "@/../public/images/image 56.png";
import brands2 from "@/../public/images/image 57.png";
import brands3 from "@/../public/images/image 58.png";
import brands4 from "@/../public/images/image 59.png";
import brands5 from "@/../public/images/image 60.png";
import Image from "next/image";

const Partners = () => {
  return (
    <section className=" mt-32">
      <FlowerHead title=" partners & clients" show={false} />
      <h4 className="  text-center font-bold text-base md:text-2xl text-gray-700  font-inter">
        We work with the best people
      </h4>
      <div className="brands grid grid-cols-2 place-items-center md:flex  md:flex-row justify-between h-[auto] md:h-[120px] mt-12 object-contain">
        <Image
          src={brands}
          alt="brands logo" priority  height={100} width={100}
          className=" object-contain"
        />
        <Image
          src={brands1}
          alt="brands logo" priority  height={100} width={100}
          className=" object-contain "
        />
        <Image
          src={brands2}
          alt="brands logo" priority  height={100} width={100}
          className=" object-contain "
        />
        <Image
          src={brands3}
          alt="brands logo" priority  height={100} width={100}
          className=" object-contain "
        />
        <Image
          src={brands4}
          alt="brands logo" priority  height={100} width={100}
          className=" object-contain "
        />
        <Image
          src={brands5}
          alt="brands logo" priority  height={100} width={100}
          className=" object-contain "
        />
      </div>
    </section>
  );
};

export default Partners;
