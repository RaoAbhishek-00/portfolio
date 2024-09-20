import React, { useState } from "react";

const ProjectCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="border-solid flex flex-col border-2 w-1/4 mx-36 p-4  ">
      <h1>Movie webApp</h1>
      <div className="my-4">
        <img src="/Cinema_TV-logo.png" />
      </div>
      <button
        onClick={toggleVisibility}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isVisible ? "Hide Info" : "Show Info"}
      </button>
      {isVisible && (
        <>
          <div>
            Developed a movie streaming webpage similar to Netflix using React,
            which incorporated Firebase for secure user authentication and
            multilingual support, Redux Toolkit for state management, and
            Tailwind CSS for responsive design.
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Visit
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
