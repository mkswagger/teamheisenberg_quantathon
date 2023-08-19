import React from "react"
import DropdownComponent from "./Dropdown"
function Compiler() {
  return (
    <div className="flex justify-center items-center  h-[95vh] border-[20px] border-spacing-20 border-[#512B81] w-full font-mono bg-black ">
      <div className="grid md:grid-rows-1 md:grid-cols-2 grid-rows-2 grid-cols-1 sm:grid-rows-2 sm:grid-cols-1 ">
        <div className="flex flex-col w-[100vh] h-[85vh] ">
          <div className="flex justify-end items-end space-x-6  py-5 pr-5">
            <button class="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-2 px-4 rounded-full shadow-md">
              Compile
            </button>
          </div>
          <div>
            <div className="pl-10">
              <DropdownComponent />
            </div>
          </div>
        </div>
        <div className="w-full h-[85vh] text-white">
          <div>Output</div>
          <div>Chart1</div>
          <div>Chart2</div>
        </div>
      </div>
    </div>
  )
}

export default Compiler
