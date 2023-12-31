import Image from "next/image";
import React from "react";
import leftImage from "@/../public/images/leftImage2.png";
import ProductCard from "./ProductCard";
import FlowerHead from "./FlowerHead";

const Category = () => {
  return (
    <section className=" relative">
      <div className=" absolute top-[-120px] left-[-120px] md:top-[-70px] md:left-[-170px] z-10 object-contain h-[220px] w-[220px]">
        <Image src={leftImage} className=" object-contain" alt="food" />
      </div>

      <FlowerHead title="Food category" />

      <div className=" flex justify-around items-center flex-col md:flex-row">
        <ProductCard title='Grand Italiano' items='26' />
        <ProductCard title='pene Salmone' items='26' />
        <ProductCard title='Pepperoni tagli' items='26' />
        <ProductCard title='Spaghetti' items='26' />
      
      </div>
    </section>
  );
};

export default Category;
