 # Quantum Energy Calculation with VQE

![Project Banner](path_to_banner_image)

## Introduction

This project demonstrates the application of Variational Quantum Eigensolver (VQE) in solving quantum energy calculation problems. VQE is a quantum algorithm used to find the lowest energy state (eigenvalue) of a given Hamiltonian, which has broad applications in fields such as quantum chemistry and material science.

## Features

- **Quantum Energy Calculation:** Utilize VQE algorithm to compute the lowest energy state of a given Hamiltonian.
- **Hamiltonian Definition:** Define the Hamiltonian terms corresponding to the system under study.
- **Ansatz Circuit:** Configure the ansatz circuit using `TwoLocal` for quantum state preparation.
- **Optimizer Setup:** Implement the SPSA optimizer to minimize the energy and find the ground state.
- **Quantum Visualization:** Visualize the eigenstate using Bloch sphere representation.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mkswagger/teamheisenberg_quantathon/

2. Install required dependencies

   ```bash
   pip install -r requirements.txt
   
 ## Usage
 
1. Open the main.py file and adjust the Hamiltonian terms for your specific system.
2. Run the script:
   ```bash
   python main.py
   ```
3. View the computed eigenstate, eigenvalue, and Bloch sphere visualization.
