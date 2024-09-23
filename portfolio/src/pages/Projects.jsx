"use client";
import React from "react";
import ProjectCard from "@/_components/ProjectCard";

const Projects = ({ projects = [] }) => {
  // Safely handle the projects array
  const points =
    projects.length > 0 ? (
      projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))
    ) : (
      <p>No projects available</p> // Fallback UI in case projects is empty
    );

  return (
    <div id="experience" className="min-w-64">
      <h3 className="text-center m-3 text-4xl ">My Projects</h3>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-8">
          {points}
        </div>
      </div>
    </div>
  );
};

export default Projects;
