"use client";
import next from "next";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#35155D] p-4 font-mono">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" className="w-12" />
        </div>
        <div className="hidden md:flex space-x-5">
          <Link
            href="/"
            className="text-white hover:text-gray-300 hover:underline"
          >
            Home
          </Link>
          <Link
            href="/compiler"
            className="text-white hover:text-gray-300 hover:underline"
          >
            Graph Gen
          </Link>
          {/* <Link
            href="/energy-states"
            className="text-white hover:text-gray-300 hover:underline"
          >
            Energy States
          </Link> */}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-purple-700 py-2">
          <a
            href="#"
            className="block text-white text-center py-2 hover:bg-purple-600"
          >
            About
          </a>
          <a
            href="#"
            className="block text-white text-center py-2 hover:bg-purple-600"
          >
            Compiler
          </a>
          <a
            href="#"
            className="block text-white text-center py-2 hover:bg-purple-600"
          >
            Energy States
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
