import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill, BsX } from "react-icons/bs";
import Resume from "../assets/rs.jpeg";

const SocialLinks = () => {
  const [showResume, setShowResume] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/jalenmoses/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/jalenmo509",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      src: Resume,
      style: "rounded-br-md",
      download: true,
      onClick: () => setShowResume(true),
    },
  ];

  const handleCloseResume = () => {
    setShowResume(false);
  };

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download, onClick }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
              onClick={onClick}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
      {showResume && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-700 bg-opacity-75 z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 text-black p-2"
              onClick={handleCloseResume}
            >
              <BsX size={30} />
            </button>
            <img src={Resume} alt="Resume" className="max-w-full max-h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
