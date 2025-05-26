import React from "react";
import NavBar from "./NavBar";
import { FaArrowRight } from "react-icons/fa6";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Section2 />
      <Footer/>
    </>
  );
}

export default HomePage;
function HeroSection() {
  return (
    <>
      <div
        className="hero min-h-[500px]"
        style={{
          backgroundImage: "url(/gambarkopi.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-2 text-6xl font-bold">Aroma Sriwijaya</h1>
            <p className="mb-5 text-2xl">
            Premium Indonesian Coffee Beans for Global Markets
            </p>
            <button className="btn btn-primary bg-amber-800 ">
              View Coffee Catalog <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <div className="hero bg-amber-50 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        
        <img
          src="src\assets\coffee-beans.jpg"
          className="max-w-xl rounded-lg shadow-2xl"
        />
        <div>
        <div className="bg-amber-100 rounded-md max-w-40 p-0.1 flex justify-center items-center">
          <p>Direct from Indonesia</p>
        </div>
          <h1 className="text-5xl font-bold text-amber-800">Exceptional Coffee Beans from the Heart of Indonesia</h1>
          <p className="py-6 text-2xl">
          Aroma Sriwijaya works directly with local farmers across Indonesia to source the finest Arabica and Robusta coffee beans. Our commitment to quality and sustainability ensures that every bean we export meets the highest standards.
          </p>
          <button className="btn btn-primary bg-amber-800">Learn About Our Process</button>
        </div>
        
      </div>
    </div>
  );
}
