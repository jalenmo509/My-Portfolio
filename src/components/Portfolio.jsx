import React from "react";
import jquery from "../assets/portfolio/jj.jpeg";
import navbar from "../assets/portfolio/navbar.jpg";
import marvel from "../assets/portfolio/ra.jpeg";
import masonry from "../assets/portfolio/masonry.jpg";
import fruit from "../assets/portfolio/pf.png"
import fetch from "../assets/portfolio/jspi.jpeg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fetch,
      codeSrc: "https://heroenginejalen.netlify.app/",
    },
    {
      id: 3,
      src: navbar,
      codeSrc: "https://aquamarine-mermaid-7b55e8.netlify.app/",
    },
    {
      id: 4,
      src: masonry,
      codeSrc: "https://cute-crumble-7b51df.netlify.app/",
    },
    {
      id: 5,
      src: jquery,
      codeSrc: "https://warm-naiad-be48bf.netlify.app/",
    },
    {
      id: 6,
      src: marvel,
      codeSrc: "https://jalenmarvel.netlify.app/",
    },
    {
      id: 7,
      src: fruit,
      codeSrc: "https://github.com/jalenmo509/python_fruit_store",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-red-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeSrc }) => (
            <div key={id} className="shadow-md shadow-red-600 rounded-lg">
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
