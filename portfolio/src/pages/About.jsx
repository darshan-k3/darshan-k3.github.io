"use client";
import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div
      id="home"
      className="h-100 bg-stone-800 flex flex-col justify-center items-center"
    >
      <div className="mt-24"></div>
      <div className="relative ">
        <img
          className="w-32 h-32 sm:w-48 sm:h-48 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="/portfolio.jpg"
          alt="Bordered avatar"
        />
        <span className="bottom-2 right-2 absolute dark:border-gray-800 rounded-full text-4xl sm:text-6xl">
          👋
        </span>
      </div>
      <div className="w-4/5 ">
        <p className="text-2xl sm:text-4xl text-gray-100 font-thin ">
          Hello, I am Darshan. I&apos;m a final year{" "}
          <span className="font-normal">master&apos;s</span> student studying at{" "}
          <span className="font-normal">King&apos;s College London</span>.
          I&apos;m currently working with{" "}
          <span className="font-normal">
            Event Driven Architectures and Micro-services with gRPC
          </span>{" "}
          and have experience using{" "}
          <span className="font-normal">
            MLOps in PyTorch, CI-CD Pipelines with Apache Airflow and Full Stack
            Development
          </span>
        </p>
      </div>
      <div className="flex space-x-6 m-5 p-3 ">
        <Link
          href="https://www.github.com/darshan-k3/"
          passHref
          className="text-white bg-[#5f6163] hover:bg-[#6c6d6e]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          <svg
            className=" w-4 h-4 sm:w-8 sm:h-8 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xl">GitHub</p>
        </Link>

        <Link
          href="https://www.linkedin.com/in/darshan-kumaresan/"
          className="text-white bg-[#233750] hover:bg-[#1e2d3f]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          passHref
        >
          <svg
            className="w-4 h-4 sm:w-8 sm:h-6 me-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
          <p className="text-xl">LinkedIn</p>
        </Link>
      </div>
    </div>
  );
};

export default About;
