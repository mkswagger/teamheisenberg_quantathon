import numpy as np
from qiskit import Aer
from qiskit.providers.aer import AerSimulator
from qiskit.algorithms.optimizers import SPSA
from qiskit.algorithms import VQE
from qiskit.circuit.library import TwoLocal
from qiskit.opflow import PauliSumOp
import matplotlib.pyplot as plt

hamiltonian_terms = [
    (0.00698131079425246, "IIIZ"),
    (-0.0004978294000830275, "IIZI"),
    (4.664512584628966e-05, "IZII"),
    (0.0004303465157577957, "ZIII"),
    (0.5099539391488543, "IIZZ"),
    (0.5099677387273946, "IZIZ"),
    (0.5099488492845516, "IZZI"),
    (0.5099106232913859, "ZIIZ"),
    (0.5099467089998899, "ZIZI"),
    (0.5099046167492709, "ZZII"),
]
hamiltonian = sum(
    coeff * PauliSumOp.from_list([(term, coeff)]) for coeff, term in hamiltonian_terms
)
num_qubits = 2
ansatz = TwoLocal(num_qubits, "ry", "cz", reps=3, entanglement="full")
optimizer = SPSA(maxiter=100)
vqe = VQE(
    ansatz=ansatz,
    optimizer=optimizer,
    quantum_instance=AerSimulator(method="statevector"),
)
result = vqe.compute_minimum_eigenvalue(operator=hamiltonian)
ground_state_energy = result.eigenvalue.real
print("Ground-State Energy:", ground_state_energy)
num_atoms = num_qubits
ground_state_energy_per_atom = ground_state_energy / num_atoms
print("Ground-State Energy per Atom:", ground_state_energy_per_atom)
