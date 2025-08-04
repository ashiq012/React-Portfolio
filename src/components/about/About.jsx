import React from "react";
import log from "../../assets/logo/log.jpg"
import express from '../../assets/tech_logo/express.png'
import nodejs from '../../assets/tech_logo/nodejs.png'
import mongodb from '../../assets/tech_logo/mongodb.png'
import html from '../../assets/tech_logo/html.png'
import css from '../../assets/tech_logo/css.png'
import javascript from '../../assets/tech_logo/javascript.png'
import react from '../../assets/tech_logo/reactjs.png'
import tailwindcss from '../../assets/tech_logo/tailwindcss.png'
import mc from '../../assets/tech_logo/mc.png'
import git from '../../assets/tech_logo/git.png'
import github from '../../assets/tech_logo/github.png'  
import postman from '../../assets/tech_logo/postman.png'
import firebase from '../../assets/tech_logo/firebase.png'
import redux from '../../assets/tech_logo/redux.png'
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white jus md:flex overflow-hidden items-center md:flex-wrap md:justify-center  shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">Tech Stack</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-15 ">
          <img className="md:h-80 hover:scale-110 duration-300 hover:shadow-xl/40" src={log} alt="About img" />

          <ul>
            <div className="flex gap-4 tracking-normal py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend :
                </h1>
                 <p className="text-sm md:text-md leading-tight flex gap-3 items-center w-screen py-4">
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={html} alt="" /></li>
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={css} alt="" /></li>
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={javascript} alt="" /></li>
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={react} alt="" /></li>
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={redux} alt="" /></li>
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={tailwindcss} alt="" /></li>

                  
                </p>
              </span>
            </div>
           
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend :
                </h1>
                <p className="text-sm md:text-md leading-tight flex gap-3 items-center py-4">
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={nodejs} alt="" /></li>
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={express} alt="" /></li>
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={mongodb} alt="" /></li>
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={mc} alt="" /></li>
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Tools :
                </h1>
                <p className="text-sm md:text-md leading-tight flex gap-3 items-center py-4">
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={git} alt="" /></li>
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={github} alt="" /></li>
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={firebase} alt="" /></li>
                    <li><img className="h-5 md:h-14 hover:scale-130 duration-300" src={postman} alt="" /></li>
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;