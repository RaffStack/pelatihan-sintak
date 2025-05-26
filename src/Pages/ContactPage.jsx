import React, { useState } from "react";
import { db } from "../firebase"; // Fixed typo
import { collection, addDoc } from "firebase/firestore";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  FaArrowRight,
  FaCopy,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function ContactPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}

export default ContactPage;

function HeroSection() {
  return (
    <>
      <div
        className="hero min-h-[400px]"
        style={{
          backgroundImage: "url(src/assets/contact-hero.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-2 text-5xl font-bold">Contact Us</h1>
            <p className="mb-5 text-xl">
            Get in touch with our team to discuss your coffee needs
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry: "",
    product: "",
    volume: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // You might want to add a toast notification here
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        inquiry: "",
        product: "",
        volume: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
          <p className="mb-8 text-lg">
            Fill out the form below and our team will get back to you within 24
            hours.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Your company"
                className="input input-bordered w-full"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                className="input input-bordered w-full"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Type of Inquiry</label>
              <div className="flex flex-col gap-4">
                {[
                  "Request a Quotation",
                  "Request Samples",
                  "Partnership Inquiry",
                  "Other",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer min-w-[180px]"
                  >
                    <input
                      type="radio"
                      name="inquiry"
                      className="radio"
                      value={option}
                      checked={formData.inquiry === option}
                      onChange={handleChange}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Product of Interest
              </label>
              <select
                name="product"
                className="select select-bordered w-full"
                value={formData.product}
                onChange={handleChange}
              >
                <option disabled value="">
                  Select a product
                </option>
                <option value="Robusta Beans">Robusta Beans</option>
                <option value="Arabica Beans">Arabica Beans</option>
                <option value="Specialty Blends">Specialty Blends</option>
                <option value="Single Origin">Single Origin</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Estimated Volume (kg)
              </label>
              <select
                name="volume"
                className="select select-bordered w-full"
                value={formData.volume}
                onChange={handleChange}
              >
                <option disabled value="">
                  Select volume range
                </option>
                <option value="1 - 100 kg">1 - 100 kg</option>
                <option value="100 - 500 kg">100 - 500 kg</option>
                <option value="500 - 1000 kg">500 - 1000 kg</option>
                <option value="1000+ kg">1000+ kg</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Please provide details about your requirements"
                className="textarea textarea-bordered w-full h-32"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full bg-amber-800 text-white"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 bg-amber-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <p className="mb-8 text-lg">
            You can also reach us directly using the following contact details.
          </p>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaEnvelope className="text-amber-800" />
                <h3 className="font-bold">Email</h3>
              </div>
              <div className="flex justify-between items-center">
                <p>info@aromasriwijaya.com</p>
                <button
                  className="btn btn-ghost btn-sm flex items-center gap-1"
                  onClick={() => handleCopy("info@aromasriwijaya.com")}
                >
                  <FaCopy /> Copy email
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaPhone className="text-amber-800" />
                <h3 className="font-bold">Phone</h3>
              </div>
              <div className="flex justify-between items-center">
                <p>+62 812 3456 7890</p>
                <button
                  className="btn btn-ghost btn-sm flex items-center gap-1"
                  onClick={() => handleCopy("+6281234567890")}
                >
                  <FaCopy /> Copy phone number
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaMapMarkerAlt className="text-amber-800" />
                <h3 className="font-bold">Address</h3>
              </div>
              <p>
                Jl. Sriwijaya No. 123, Palembang, South Sumatra, Indonesia 30139
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaClock className="text-amber-800" />
                <h3 className="font-bold">Business Hours</h3>
              </div>
              <div className="space-y-1">
                <p>
                  <span className="font-medium">Monday - Friday</span>
                  <br />
                  8:00 AM - 5:00 PM (GMT+7)
                </p>
                <p>
                  <span className="font-medium">Saturday</span>
                  <br />
                  9:00 AM - 2:00 PM (GMT+7)
                </p>
                <p>
                  <span className="font-medium">Sunday</span>
                  <br />
                  Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
