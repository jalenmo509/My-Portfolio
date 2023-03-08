import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import python from "../assets/python2.png";
import java from "../assets/java3.png";
import tailwind from "../assets/tailwind.png";
import eclipse from "../assets/eclipse2.png";
import mysql from "../assets/mysql7.png";
import mongo from "../assets/mongo.png";
import node from "../assets/nodejs.png";
import spring from "../assets/sts.png";
import bootstrap from "../assets/bsl.png"
import flask from "../assets/flask.png"
import graph from "../assets/graphql.png"
import github from "../assets/github.png"
import jquery from "../assets/jq.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 5,
      src: java,
      title: "Java",
      style: "shadow-red-600",
    },
    {
      id: 6,
      src: reactImage,
      title: "React JS",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-lime-400",
    },
    {
      id: 15,
      src: flask,
      title: "Flask",
      style: "shadow-black",
    },
    {
      id: 9,
      src: mysql,
      title: "MySQL Workbench",
      style: "shadow-orange-400",
    },
    {
      id: 10,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      src: eclipse,
      title: "Eclipse",
      style: "shadow-orange-300",
    },
    {
      id: 13,
      src: spring,
      title: "Spring Boot",
      style: "shadow-green-600",
    },
    {
      id: 14,
      src: bootstrap,
      title: "Bootstrap CSS",
      style: "shadow-purple-500",
    },
    {
      id: 16,
      src: graph,
      title: "GraphQL",
      style: "shadow-pink-600",
    },
    {
      id: 17,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 18,
      src: jquery,
      title: "jQuery",
      style: "shadow-blue-600",
    },
   
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-red-800 to-black flex flex-wrap justify-center items-center"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-red-500 p-2 inline">
            Technical Skills
          </p>
          <p className="py-6">Coding Languages & Tools:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
