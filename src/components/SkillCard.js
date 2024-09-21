import React, { useState } from "react";

const SkillCard = ({ name, img, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function trimSentence(sentence, wordLimit) {
    if (!sentence) {
      return ""; // Return an empty string if sentence is undefined or empty
    }
    const words = sentence.split(" ");
    return words.slice(0, wordLimit).join(" "); // Use the wordLimit parameter here
  }

  return (
    <div
      className="border-solid flex flex-col border-2 w-54 p-4 cursor-pointer"
      onClick={toggleVisibility}
    >
      <h1 className="text-xl text-center font-bold">{name}</h1>
      <div className="flex justify-center ">
        <img src={img} alt=" Logo" className="w-48 h-auto" />
      </div>
      {!isVisible && (
        <div>
          {" "}
          {trimSentence(content, 3) + "...."}
          <span className="ml-4 text-sm text-gray-500 mt-4">read more</span>
        </div>
      )}
      {isVisible && <div className="text-center  ">{content}</div>}
    </div>
  );
};

export default SkillCard;
