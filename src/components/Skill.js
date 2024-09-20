import React from "react";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div>
      <h1 className="text-3xl px-8 text-center">Skills</h1>
      <h2 className="px-8 text-center text-lg py-2">
        Here are some of skills which I learn so far...
      </h2>
      <div className="flex flex-wrap justify-around w-3/4 mx-auto">
        <div className="px-8 py-2">
          <SkillCard name="HTML" img="/html1.png" />
        </div>
        <div className="px-8 py-2">
          <SkillCard name="React.js" img="/react3.png" />
        </div>
        <div className="px-8 py-2">
          <SkillCard name="Next.js" img="/next.png" />
        </div>
        <div className="px-8 py-2">
          <SkillCard name="CSS" img="/css.png" />
        </div>
        <div className="px-8 py-2">
          <SkillCard name="Tailwind" img="/tailwind.png" />
        </div>
        <div className="px-8 py-2">
          <SkillCard name="Redux" img="/redux.png" />
        </div>
      </div>
      
    </div>
  );
};

export default Skill;
