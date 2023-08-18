import React from "react"
import boot from "../assets/boot.svg"
import Image from "next/image"
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <Image src={boot} alt="Logo" className="h-10 mr-2" />
      </div>

      {/* Navigation Links */}
      <div className="space-x-0 md:space-x-4 md:flex items-center">
        <a href="#" className="text-white hover:underline">
          About
        </a>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar
