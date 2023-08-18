import React from "react"

function About() {
  return (
    <div className="flex flex-col font-mono items-center justify-center bg-black  h-screen text-white ">
      <div className="flex w-full items-center justify-center h-20 text-2xl pb-10  ">
        About
      </div>
      <div className="flex w-full align-center items-center px-10 text-md">
        1. Molecular Hamiltonian: The given molecular system is described by a
        Hamiltonian that consists of various Pauli terms, each associated with a
        coefficient representing the energy contribution of that term to the
        molecular system.
        <br />
        2. Quantum Ansatz: An ansatz quantum circuit is defined using the
        `TwoLocal` circuit library. This ansatz is a parameterized quantum
        circuit composed of rotation (`ry`) and entanglement `cz` gates. The
        number of qubits in the ansatz is determined by the number of qubits in
        the molecular Hamiltonian.
        <br />
        3. VQE Setup: The VQE algorithm is configured with the ansatz circuit,
        an optimization algorithm (`SPSA` in this case), and a quantum simulator
        (`AerSimulator`) as the backend.
        <br />
        4. VQE Computation: The VQE algorithm is executed to find the minimum
        eigenvalue of the molecular Hamiltonian. The algorithm iteratively
        adjusts the parameters of the ansatz circuit to minimize the expected
        energy.
        <br />
        5. Results Extraction: The computed minimum eigenvalue (ground-state
        energy) and corresponding eigenstate (quantum state) are extracted from
        the VQE result.
        <br />
        6. Visualization: The eigenvalue and eigenstate are printed to the
        console. Additionally, a Bloch sphere representation of the quantum
        state is plotted using the `plot_bloch_multivector` function from
        Qiskit's visualization tools.
        <br />
        The code effectively combines principles of quantum mechanics, quantum
        circuits, and optimization to estimate the ground-state energy of a
        molecular system using the VQE algorithm. This provides a glimpse into
        how quantum computing can potentially revolutionize the field of
        computational chemistry by enabling the efficient simulation of complex
        molecular systems.
      </div>
    </div>
  )
}

export default About
