"use client";
import axios from "axios";
import React, { useState } from "react";

function Compiler() {
  const [data, setData] = useState([]);
  const [inputValues, setInputValues] = useState([""]); // Initialize with one input field
  const [selectedOperators, setSelectedOperators] = useState([""]); // Initialize with one operator
  const operators = [
    "IIII",
    "IIIZ",
    "IIZI",
    "IZII",
    "ZIII",
    "IIIY",
    "IIYI",
    "IYII",
    "YIII",
  ];

  const generateCharts = async () => {
    try {
      const dataArray = inputValues.map((value, index) => ({
        value: parseFloat(value), // Assuming your values are numeric
        operator: selectedOperators[index],
      }));
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/generate-charts/`,
        { data: dataArray }
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (index, value) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = value;
    setInputValues(updatedInputValues);
  };

  const handleOperatorChange = (index, operator) => {
    const updatedSelectedOperators = [...selectedOperators];
    updatedSelectedOperators[index] = operator;
    setSelectedOperators(updatedSelectedOperators);
  };

  const addInputFields = () => {
    setInputValues([...inputValues, ""]);
    setSelectedOperators([...selectedOperators, ""]);
  };

  return (
    <div className="flex justify-center items-center  h-[95vh] border-[20px] border-spacing-20 border-[#512B81] w-full font-mono bg-black ">
      <div className="grid md:grid-rows-1 md:grid-cols-2 grid-rows-2 grid-cols-1 sm:grid-rows-2 sm:grid-cols-1 ">
        <div className="flex flex-col w-[100vh] h-[85vh] ">
          <div className="flex justify-end items-end space-x-6  py-5 pr-5">
            <button
              onClick={generateCharts}
              className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-2 px-4 rounded-full shadow-md"
            >
              Submit
            </button>
          </div>
          <div>
            <div className="pl-10 flex flex-col w-1/5 space-y-2 ">
              <label className="text-white" htmlFor="value">
                Hamiltonion Values
              </label>
              {inputValues.map((inputValue, index) => (
                <div className="flex space-x-3" key={index}>
                  <input
                    name="value"
                    type="number"
                    value={inputValue}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <select
                    id={`operators-${index}`}
                    className="bg-purple-800 border border-gray-300 text-white text-sm block w-32 p-2"
                    value={selectedOperators[index]}
                    onChange={(e) =>
                      handleOperatorChange(index, e.target.value)
                    }
                  >
                    <option value="">Gates</option>
                    {operators.map((gate) => (
                      <option key={gate} value={gate}>
                        {gate}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              <button
                onClick={addInputFields}
                className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow-md"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[85vh] text-white">
          <h2 className="text-center text-3xl font-mono font-bold text-purple-500">
            Output
          </h2>
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
