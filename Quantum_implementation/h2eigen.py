import numpy as np
import matplotlib.pyplot as plt
from qiskit import Aer
from qiskit.providers.aer import AerSimulator
from qiskit.algorithms.optimizers import SPSA
from qiskit.algorithms import VQE
from qiskit.circuit.library import TwoLocal
from qiskit.opflow import PauliSumOp
from qiskit.visualization import plot_bloch_multivector


hamiltonian_terms = [
    (0.174349776, "II"),
    (0.119280364, "IZ"),
    (-0.225753502, "ZI"),
    (-0.098663593, "ZZ"),
]
hamiltonian = sum(
    coeff * PauliSumOp.from_list([(term, coeff)]) for coeff, term in hamiltonian_terms
)
num_qubits = 1
ansatz = TwoLocal(num_qubits, "ry", "cz", reps=3, entanglement="full")
optimizer = SPSA(maxiter=100)
vqe = VQE(
    ansatz=ansatz,
    optimizer=optimizer,
    quantum_instance=AerSimulator(method="statevector"),
)
result = vqe.compute_minimum_eigenvalue(operator=hamiltonian)
eigenstate = result.eigenstate
eigenvalue = result.eigenvalue
print("Eigenvalue:", eigenvalue)
print("Eigenstate:", eigenstate)
plot_bloch_multivector(eigenstate).show()
