import React from "react";

const Course = () => {
  return (
    <div>
      <div className="container mt-36 mb-32 text-center p-2">
        <h2 className="font-bold text-5xl text-cyan-500">
          <span className="text-amber-500">Web Design</span> <span className="text-emerald-400">Mastery Course-2023</span>{" "}
        </h2>
        <button className="mt-6 bg-pink-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            class="fill-current w-5 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>
            {" "}
            <a href="https://drive.google.com/drive/folders/1hBJ20MzcI9A2tf9C10wtwkuEtVs5fRn2?usp=drive_link">
              Web Design Course Download
            </a>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Course;
