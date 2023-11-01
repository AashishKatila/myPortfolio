import React from "react";
import Notes from "../assets/note.png";
import Pokemon from "../assets/pokemon.png";
import Ecommerce from "../assets/ecommerce.png";
import Movieland from "../assets/movieland.png";
import Weather from "../assets/weather.png";
import Dance from "../assets/dance.png";

const Project = () => {
  return (
    <div name='projects' className="w-full md:h-screen bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#db3a34]">
            Projects
          </p>
          <p className="py-5 text-lg">Check out some of my recent projects</p>
        </div>
{/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Notes})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100  ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Note
              </span>

              <div className="pt-8 text-center ">
                <a href="https://react-note-save.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AashishKatila/react_note" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>

            </div>

          </div>

          <div
            style={{ backgroundImage: `url(${Pokemon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100  ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Pokemon List
              </span>

              <div className="pt-8 text-center ">
                <a href="https://pokemon-evolution-list.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AashishKatila/Pokemon_List" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
              
            </div>

          </div>

          <div
            style={{ backgroundImage: `url(${Ecommerce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100  ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Ecommerce
              </span>

              <div className="pt-8 text-center ">
                <a href="https://bespoke-hotteok-7914f8.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AashishKatila/Ecommerce1" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
              
            </div>

          </div>


          <div
            style={{ backgroundImage: `url(${Movieland})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100  ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                MovieLand
              </span>

              <div className="pt-8 text-center ">
                <a href="https://654241cdd66ac737312ed2a5--graceful-kheer-bb46dc.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AashishKatila/MovieLand" target="_blank"> 
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>

            </div>

          </div>

          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100  ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Weather App
              </span>

              <div className="pt-8 text-center ">
                <a href="https://profound-pegasus-044f51.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AashishKatila/Weather_App" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
              
            </div>

          </div>

          <div
            style={{ backgroundImage: `url(${Dance})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100  ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Dancing Paragraph
              </span>

              <div className="pt-8 text-center ">
                <a href="https://candid-semifreddo-ddd50c.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AashishKatila/Dancing-Paragraph" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
              
            </div>

          </div>


        </div>
      </div>
    </div>
  );
};

export default Project;
