import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-[#0a192f] flex justify-center items-center
    "
    >
      <form
        action="https://getform.io/f/07210d4c-4134-43b5-ae82-5bc4cf7bcf99"
        method="POST"
        className="flex flex-col justify-center max-w-[1000px] w-full h-full p-4 "
      >
        <div className="pb-8">
          <p className="font-bold text-4xl inline text-gray-300 border-b-4 border-[#db3a34]">
            Contact
          </p>
          <p className="text-gray-300 text-lg py-4 ">
            I'm here to listen, work with you, and realize the vision you have
            for your website. Come together and let's investigate the
            possibilities. Message me on social media or leave me a note. It
            will be a pleasure working with you!
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 placeholder-gray-800 "
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] placeholder-gray-800 "
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          name=""
          className="p-2 bg-[#ccd6f6] "
          rows="10"
          required
        ></textarea>
        <button className="text-white text-lg border-2 hover:bg-[#db3a34] hover:border-[#db3a34] px-4 py-3 my-6 mx-auto ">
          Click to Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
