import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Product from "./Product";
import { FaArrowRight } from "react-icons/fa6";

function ProductPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <div className="flex-col flex justify-center items-center gap-5 min-h-screen m-30 ">
        <div className=" flex gap-5">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="flex gap-5">
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductPage;

function HeroSection() {
  return (
    <>
      <div
        className="hero min-h-[400px]"
        style={{
          backgroundImage: "url(src/assets/coffee-varieties.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-2 text-6xl font-bold">Our Coffee Products</h1>
            <p className="mb-5 text-2xl">
              Premium Arabica and Robusta beans from Indonesia's finest growing
              regions
            </p>
            <button className="btn btn-primary bg-amber-800 ">
              Request Samples <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
