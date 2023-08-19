import numpy as np
import matplotlib.pyplot as plt
import time
from qiskit import Aer
from qiskit.providers.aer import AerSimulator
from qiskit.algorithms.optimizers import SPSA
from qiskit.algorithms import VQE
from qiskit.circuit.library import TwoLocal
from qiskit.opflow import PauliSumOp

hamiltonian_terms = [
    (0.00698131079425246, "IIIZ"),
    (-0.0004978294000830275, "IIZI"),
    (4.664512584628966e-05, "IZII"),
    (0.0004303465157577957, "ZIII"),
    (0.5099539391488543, "IIZZ"),
    (0.5099677387273946, "IZIZ"),
    (0.5099488492845516, "IZZI"),
]

hamiltonian = sum(
    coeff * PauliSumOp.from_list([(term, coeff)]) for coeff, term in hamiltonian_terms
)

num_assets = 4
ansatz = TwoLocal(num_assets, "ry", "cz", reps=3, entanglement="full")
ansatz_params = np.random.rand(ansatz.num_parameters)
optimizer = SPSA(maxiter=100)

vqe = VQE(
    ansatz=ansatz,
    optimizer=optimizer,
    quantum_instance=AerSimulator(method="statevector"),
)

start_time_classical = time.time()
classical_result = np.exp(-1j * hamiltonian.to_matrix()) @ ansatz_params
end_time_classical = time.time()
calculation_time_classical = end_time_classical - start_time_classical
print("Classical computation time:", calculation_time_classical, "seconds")
start_time_quantum = time.time()
result = vqe.compute_minimum_eigenvalue(operator=hamiltonian)
end_time_quantum = time.time()
calculation_time_quantum = end_time_quantum - start_time_quantum
print("Quantum computation time (VQE):", calculation_time_quantum, "seconds")
print(
    "Classical computation is",
    calculation_time_classical / calculation_time_quantum,
    "times faster than quantum VQE",
)
plt.figure(figsize=(8, 5))
plt.bar(
    ["Classical", "Quantum (VQE)"],
    [calculation_time_classical, calculation_time_quantum],
)
plt.ylabel("Time (seconds)")
plt.title("Computing Time Comparison")
plt.tight_layout()
plt.show()
