import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am experienced in various web development technologies including
          HTML, CSS, JavaScript, Python, Java, MySQL, MongoDB, and React JS. My
          expertise in HTML and CSS has allowed me to create visually appealing
          and responsive user interfaces, while my proficiency in JavaScript has
          enabled me to add dynamic and interactive elements to my projects. I
          have worked with Python and Java for server-side scripting and have
          experience in database management using MySQL and MongoDB.
          Furthermore, I am well-versed in React JS, a JavaScript library for
          building user interfaces, and have used it to create performant and
          scalable single-page applications. My ability to work with a range of
          technologies has given me a comprehensive understanding of the full
          stack development process, enabling me to build robust and efficient
          web applications.
        </p>

        <br />

        <p className="text-xl">
        </p>
      </div>
    </div>
  );
};

export default About;
