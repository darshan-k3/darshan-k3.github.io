"use client";
import React from "react";
import ProjectCard from "@/_components/ProjectCard";

const Projects = ({ projects }) => {
  const points = projects.map((project) => (
    // <li key={project.id}>{project.description_points}</li>
    <ProjectCard key={project.id} project={project} />
  ));
  return (
    <div id="experience" className="min-w-64">
      <h3 className="text-center m-3 text-3xl">My Projects</h3>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-8">
          {points}
        </div>
      </div>
    </div>
  );
};

export default Projects;
