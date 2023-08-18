import React from "react"

function Ps() {
  return (
    <div className="flex w-full h-screen items-center justify-center pb-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:max-w-screen-lg mx-auto h-96 font-mono text-purple-500">
        <div className=" col-span-1 md:col-span-1 py-10 text-center border-r-4 border-black sm:border-black md:border-[#512B81] text-2xl text-white">
          Problem Statement
        </div>
        <div className=" col-span-1 md:col-span-1 py-10 text-center border-l-4 border-black sm:border-black pl-10 sm:pl-10 md:pl-20 pr-10 sm:pr-10 md:pr-0 leading-7 font-bold md:border-[#512B81]">
          Given a Hamiltonian
          <br />
          0.00698131079425246 * IIIZ
          <br />
          -0.0004978294000830275 * IIZI
          <br />
          +4.664512584628966e-05 * IZII
          <br />
          +0.0004303465157577957 * ZIII
          <br />
          +0.5099539391488543 * IIZZ
          <br />
          +0.5099677387273946 * IZIZ
          <br />
          +0.5099488492845516 * IZZI
          <br />
          +0.5099106232913859 * ZIIZ
          <br />
          +0.5099467089998899 * ZIZI
          <br />
          +0.5099046167492709 * ZZII
          <br />
          <br />
          and the ansatz ry = TwoLocal(num_assets, "ry", "cz", reps=3,
          entanglement="full")
          <br />
          Find the following using SamplingVQE and EsimatorVQE for every step of
          the iteration
          <br />
          Eigenstates, corresponding eigenvalues, and their probability. Also,
          extract the variational parameters associated with every step of the
          iteration.
        </div>
      </div>
    </div>
  )
}

export default Ps
