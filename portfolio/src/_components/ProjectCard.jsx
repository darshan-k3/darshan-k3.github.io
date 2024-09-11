"use client";
import React from "react";
import skillLogos from "@/_assets/logos";

const ProjectCard = ({ project }) => {
  const points = project.description_points.map((point, index) => (
    <li key={index}>{point}</li>
  ));

  const renderSkillsWithLogos = (skills) => {
    return (
      <div className="flex flex-wrap justify-start gap-2">
        {skills.map((skill, index) => {
          const logo = skillLogos[skill.toLowerCase()];
          return (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-md"
            >
              {logo ? (
                <img
                  src={logo}
                  alt={skill}
                  className="max-h-8 md:max-h-12 object-contain"
                />
              ) : (
                <span className="text-sm md:text-base">{skill}</span>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-between bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full lg:w-[1000px] p-4">
      <div className="p-4 flex-1">
        <h5 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h5>
        <p className="flex items-center mt-4 text-base md:text-xl">
          Made with:
        </p>
        <div className="flex flex-wrap ml-2 space-x-2">
          {renderSkillsWithLogos(project.skills)}
        </div>
        <ul className="text-base md:text-xl lg:text-2xl font-light space-y-1 text-gray-700 dark:text-gray-400 mt-4">
          {points}
        </ul>
      </div>
      {project.image.split(".").pop() !== "pdf" ? (
        <img
          className="self-center lg:self-end w-full h-auto lg:h-[480px] lg:w-[450px] object-cover rounded-lg mt-4 lg:mt-0"
          src={project.image}
          alt={project.title}
        />
      ) : (
        <iframe
          className="self-center lg:self-end w-full h-auto lg:h-[480px] lg:w-[550px] rounded-lg mt-4 lg:mt-0"
          src={`${project.image}#zoom=50`}
        />
      )}
    </div>
  );
};

export default ProjectCard;
