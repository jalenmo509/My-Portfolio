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
          I have experience with different web development technologies like
          HTML, CSS, JavaScript, Python, Java, MySQL, MongoDB, and React JS. I'm
          proficient in creating visually appealing and responsive user
          interfaces using HTML and CSS, and I can add dynamic and interactive
          elements to projects using JavaScript. I've also used Python and Java
          for server-side scripting and have knowledge of database management
          using MySQL and MongoDB. Additionally, I'm familiar with React JS, a
          JavaScript library for building user interfaces, and have used it to
          create single-page applications that are performant and scalable. I
          believe my exposure to a range of technologies has given me a good
          understanding of the full-stack development process, and I'm eager to
          continue learning and building robust web applications.
        </p>

        <br />

        <p className="text-xl"></p>
      </div>
    </div>
  );
};

export default About;
