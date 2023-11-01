import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#db3a34]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 items-center">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi, I'm Aashish, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-lg">
              I'm a dedicated React JS developer on a mission to
              create exceptional web experiences. With a love for coding,
              problem-solving, and a commitment to React.js, I craft standout
              web applications. Beyond the code, I'm an explorer of all things
              web development. Let's embark on a journey to bring your web visions to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
