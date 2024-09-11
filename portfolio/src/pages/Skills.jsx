"use client"
import React from "react";

import skillLogos from "@/_assets/logos";
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const renderSkillsWithLogos = (skills) => {
  return Object.entries(skills).map(([name, logo]) => {
    return (
      <div key={name} className="flex flex-col items-center p-4">
        <img src={logo} alt={name} className="max-h-16 max-w-16 object-cover" />
        <span className="text-lg mt-2 text-center">
          {capitalizeFirstLetter(name)}
        </span>
      </div>
    );
  });
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="mt-24 flex flex-col justify-center items-center h-screen w-screen"
    >
      <h3 className="text-3xl">My Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-full w-full max-w-4xl overflow-auto p-4">
        {renderSkillsWithLogos(skillLogos)}
      </div>
    </div>
  );
};

export default Skills;
