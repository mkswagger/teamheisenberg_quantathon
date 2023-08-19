import axios from "axios";
import React, { useState } from "react";

function Compiler() {
  const [data, setData] = useState();
  const generateCharts = async () => {
    dataArray = JSON.parse(data);
    try {
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/generate-charts/`,
        { data: dataArray }
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center  h-[95vh] border-[20px] border-spacing-20 border-[#512B81] w-full font-mono bg-black ">
      <div className="grid md:grid-rows-1 md:grid-cols-2 grid-rows-2 grid-cols-1 sm:grid-rows-2 sm:grid-cols-1 ">
        <div className="flex flex-col w-[100vh] h-[85vh] ">
          <div className="flex justify-end items-end space-x-6  py-5 pr-5">
            <button
              onClick={generateCharts}
              class="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-2 px-4 rounded-full shadow-md"
            >
              Compile
            </button>
          </div>
          <div>
            <textarea
              onChange={(e) => setData(e.target.value)}
              placeholder="Enter your input here...
"
              className="bg-gray-700 text-white ml-5 p-2 w-[48vw] h-[75vh]  rounded-lg border-none resize-none focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div className="w-full h-[85vh] text-white">
          {/* <h2 className="text-center text-3xl font-mono font-bold text-purple-500">
            Output
          </h2> */}
          <div className="flex justify-center items-center flex-col">
            <div>Chart1</div>
            <div>Chart2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compiler;
