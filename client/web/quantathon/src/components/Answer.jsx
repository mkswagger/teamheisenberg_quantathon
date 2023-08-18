"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

export function Answer() {
  const callPlots = async () => {
    try {
      const getPlots = await axios.get("http://127.0.0.1:8000/api/get-plots/");
      console.log(getPlots);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callPlots();
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl my-10 font-mono font-light text-purple-500">
        Output
      </h1>
      <div className="flex flex-col justify-center items-center space-y-5">
        <Image
          src={`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/media/plots/bloch_sphere.png`}
          alt="plot"
          width={1000}
          height={1000}
        />
        <Image
          src={`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/media/plots/eigenstate_waveform.png`}
          alt="plot"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
