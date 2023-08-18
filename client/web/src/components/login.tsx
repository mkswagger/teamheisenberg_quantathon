import React from "react"
import boot from "../assets/boot.svg"
import Image from "next/image"

function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="flex flex-col w-[70%] sm:w-[70%] md:w-[40%] h-auto sm:h-[60%] md:h-[50%]  rounded-lg backdrop-blur-sm bg-zinc-800 opacity-80 max-w-md z-10 px-5 pt-10 ">
        <div className="flex justify-center blur-none ">
          <Image src={boot} alt="logo" className="w-20 " />
        </div>
        <div className="flex items-start justify-center w-full h-8 mt-5 text-xl text-gray-100">
          <h2 className="text-2xl font-semibold text-white mb-6 pt-3 hidden">
            Sign In
          </h2>
        </div>
        <form
          action=""
          className="w-full h-auto p-3 max-w-sm flex items-center flex-col"
        >
          {/* <input
            type="email"
            name=""
            id=""
            className="h-8 rounded-lg  border-spacing-4 border-white border-2 bg-transparent focus:border-[#28D8FE]"
          /> */}
          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Email</label>
            <input
              className="appearance-none bg-transparent border-b-2 border-white w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-[#512B81]"
              id="Email"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-6 pt-4">
            <label className="block text-white font-bold mb-2">Password</label>
            <input
              className="appearance-none bg-transparent border-b-2 border-white w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-[#512B81]"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex w-full h-20 items-start justify-center">
            <button
              className="bg-[#512B81] hover:bg-[#35155D] active:bg-[#0C0119] text-zinc-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-5 drop-shadow-xl h-10 mx-3 sm:mx-3 lg:mx-10"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      {/* <div className="flex flex-col w-[70%] sm:w-[70%] md:w-[40%] h-[60%] sm:h-[60%] md:h-[50%]  opacity-80 rounded-lg bg-zinc-800 max-w-md blur-sm absolute"></div> */}
    </div>
  )
}

export default Login
