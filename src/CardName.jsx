import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function CardName() {
  return (
    <>
      <div className="h-screen bg-gray-300 flex justify-center items-center">
        <div className="w-96 h-auto p-4 rounded-xl shadow-xl bg-white">
          <div className="flex justify-center items-center  flex-col">
            <img
              src="src\assets\kampus mi.jpeg"
              alt=""
              className="w-20 h-20 rounded-full shadow-xl "
            />
            <h1 className="text-xl font-bold">M. Rafly Pratama</h1>
            <p className="text-gray-600">Mahasiswa</p>
          </div>
          <div className="mt-4 flex text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              cumque quidem, tenetur sapiente cupiditate omnis expedita maiores
              velit animi, facilis quasi earum fuga. Ipsum odio nihil
              repudiandae cum quae excepturi.
            </p>
          </div>
          <LinkSosial
            text="Instagram"
            icon={<FaInstagram />}
            link="https://www.instagram.com/"
          />
          <LinkSosial
            text="Github"
            icon={<FaGithub />}
            link="https://www.github.com/RaffStack/"
          />
          <LinkSosial
            text="Faceebook"
            icon={<FaFacebook />}
            link="https://www.facebook.com/"
          />
        </div>
      </div>
    </>
  );
}

export default CardName;
function LinkSosial(props) {
  return (
    <>
      <div className="mt-4 flex justify-center items-center ">
        <a
          href={props.link}
          target="blank"
          className="flex p-2 w-full text-center justify-center items-center rounded-md bg-black text-white"
        >
          <span className="mr-2">{props.icon}</span>
          {props.text}
        </a>
      </div>
    </>
  );
}
