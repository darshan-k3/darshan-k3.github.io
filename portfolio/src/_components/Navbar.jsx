"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("#home");
  const handleClick = (event) => {
    const clickedLink = event.target.closest("a");

    if (clickedLink) {
      const selectedId = clickedLink.getAttribute("href");
      setSelected(selectedId);
    }
  };

  const navItems = [
    { id: "#home", label: "Home" },
    { id: "#experience", label: "Experience" },
    { id: "#skills", label: "Skills" },
    // { id: "#experience", label: "Experience" },
    // { id: "#education", label: "Education" },
    { id: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center mt-4 rounded z-10">
      <ul
        className="flex flex-row justify-between bg-stone-300 rounded-full shadow-lg p-2 space-x-4"
        onClick={handleClick}
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`rounded-full p-2 transition-all ease-in duration-300 ${
              selected === item.id ? "animate-in bg-stone-100" : "none"
            }`}
          >
            <a href={item.id}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
