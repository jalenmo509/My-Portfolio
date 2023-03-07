import React from "react";
import Super from "../assets/portfolio/sp.jpeg";
import Pixel from "../assets/portfolio/pix.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import Marvel from "../assets/portfolio/ra.jpeg";
import Masonry from "../assets/portfolio/masonry.jpg";
import Fruit from "../assets/portfolio/pf.png"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Super,
      codeSrc: "https://heroenginejalen.netlify.app/",
    },
    {
      id: 3,
      src: navbar,
      codeSrc: "https://aquamarine-mermaid-7b55e8.netlify.app/",
    },
    {
      id: 4,
      src: Masonry,
      codeSrc: "https://cute-crumble-7b51df.netlify.app/",
    },
    {
      id: 5,
      src: Pixel,
      codeSrc: "https://warm-naiad-be48bf.netlify.app/",
    },
    {
      id: 6,
      src: Marvel,
      codeSrc: "https://jalenmarvel.netlify.app/",
    },
    {
      id: 7,
      src: Fruit,
      codeSrc: "https://github.com/jalenmo509/python_fruit_store",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeSrc }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={codeSrc} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
