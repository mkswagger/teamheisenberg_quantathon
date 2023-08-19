from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import numpy as np
from qiskit import Aer
from qiskit.providers.aer import AerSimulator
from qiskit.algorithms.optimizers import SPSA
from qiskit.algorithms import VQE
from qiskit.circuit.library import TwoLocal
from qiskit.opflow import PauliSumOp
import matplotlib
import matplotlib.pyplot as plt
import time
from qiskit.visualization import plot_bloch_multivector
matplotlib.use('Agg')

hamiltonian_terms = [
    {0.00698131079425246, "IIIZ"},
    {-0.0004978294000830275, "IIZI"},
    {4.664512584628966e-05, "IZII"},
    {0.0004303465157577957, "ZIII"},
    {0.5099539391488543, "IIZZ"},
    {0.5099677387273946, "IZIZ"},
    {0.5099488492845516, "IZZI"},
]

@api_view(["GET"])
def index(request):
    if request.method == "GET":
        hamiltonian = sum(
            coeff * PauliSumOp.from_list([(term, coeff)]) for coeff, term in hamiltonian_terms
        )

        # Define the ansatz circuit
        num_assets = 4  # Adjust as needed
        ansatz = TwoLocal(num_assets, "ry", "cz", reps=3, entanglement="full")

        # Initialize the VQE optimizer
        optimizer = SPSA(maxiter=100)

        # Create the VQE instance
        vqe = VQE(
            ansatz=ansatz,
            optimizer=optimizer,
            quantum_instance=AerSimulator(method="statevector"),
        )

        # Run the VQE algorithm
        result = vqe.compute_minimum_eigenvalue(operator=hamiltonian)


        # Extract the eigenstate
        eigenstate = result.eigenstate

        # Plot the eigenstate values as a wave
        eigenvalues = result.eigenvalue
        plt.figure(figsize=(10, 6))
        plt.plot(np.real(eigenstate), label="Real Part", color="b")
        plt.plot(np.imag(eigenstate), label="Imaginary Part", color="r")
        plt.xlabel("Basis State")


        plt.ylabel("Value")
        plt.title("Eigenstate Waveform")
        plt.legend()
        plt.grid(True)
        plt.tight_layout()
        eigenstate_path = "media/plots/eigenstate_waveform.png"
        plt.savefig(eigenstate_path)

        state_vector = result.eigenstate
        plot_bloch_multivector(state_vector)
        bloch_path = "media/plots/bloch_sphere.png"
        plt.savefig(bloch_path)

        return Response({"message":"successful","bloch_path":bloch_path,"eigenstate_path":eigenstate_path},status=status.HTTP_200_OK)
    
@api_view(["POST"])
def generate_charts(request):
    if request.method == "POST":
        data = request.data.get('data', [])
        hamiltonian_terms = [(item['value'], item['term']) for item in data]

        # Create the Hamiltonian operator
        hamiltonian = sum(
            coeff * PauliSumOp.from_list([(term, coeff)]) for coeff, term in hamiltonian_terms
        )

        # Define the ansatz circuit
        num_assets = 4  # Adjust as needed
        ansatz = TwoLocal(num_assets, "ry", "cz", reps=3, entanglement="full")

        # Initialize the VQE optimizer
        optimizer = SPSA(maxiter=100)

        # Create the VQE instance
        vqe = VQE(
            ansatz=ansatz,
            optimizer=optimizer,
            quantum_instance=AerSimulator(method="statevector"),
        )

        # Run the VQE algorithm
        result = vqe.compute_minimum_eigenvalue(operator=hamiltonian)

        # Extract the eigenstate
        eigenstate = result.eigenstate

        # Plot the eigenstate values as a wave
        eigenvalues = result.eigenvalue
        plt.figure(figsize=(10, 6))
        plt.plot(np.real(eigenstate), label="Real Part", color="b")
        plt.plot(np.imag(eigenstate), label="Imaginary Part", color="r")
        plt.xlabel("Basis State")
        plt.ylabel("Value")
        plt.title("Eigenstate Waveform")
        plt.legend()
        plt.grid(True)
        plt.tight_layout()
        eigenstate_path = "media/plots/eigenstate_waveform.png"
        plt.savefig(eigenstate_path)

        state_vector = result.eigenstate
        plot_bloch_multivector(state_vector)
        bloch_path = "media/plots/bloch_sphere.png"
        plt.savefig(bloch_path)

        return Response({"message": "successful", "bloch_path": bloch_path, "eigenstate_path": eigenstate_path}, status=status.HTTP_200_OK)

@api_view(['POST'])
def benchmark(request):
    data = request.data.get('data',[])
    hamiltonian_terms = [(item['value'], item['term']) for item in data]

    # Create the Hamiltonian operator
    hamiltonian = sum(
        coeff * PauliSumOp.from_list([(term, coeff)]) for coeff, term in hamiltonian_terms
    )

    # Define the ansatz circuit
    num_assets = 4  # Adjust as needed
    ansatz = TwoLocal(num_assets, "ry", "cz", reps=3, entanglement="full")

    # Initialize the VQE optimizer
    optimizer = SPSA(maxiter=100)

    # Create the VQE instance
    vqe = VQE(
        ansatz=ansatz,
        optimizer=optimizer,
        quantum_instance=AerSimulator(method="statevector"),
    )

    # Measure the time it takes to perform the classical computation
    start_time_classical = time.time()

    # Perform the classical computation (e.g., matrix-vector multiplication)
    result = vqe.compute_minimum_eigenvalue(operator=hamiltonian)
    ansatz_params = result.optimal_point
    classical_result = np.exp(-1j * hamiltonian.to_matrix()) @ ansatz.bind_parameters(ansatz_params)

    end_time_classical = time.time()
    calculation_time_classical = end_time_classical - start_time_classical

    # Measure the time it takes to perform the quantum VQE computation
    start_time_quantum = time.time()

    # Run the VQE algorithm
    result = vqe.compute_minimum_eigenvalue(operator=hamiltonian)

    end_time_quantum = time.time()
    calculation_time_quantum = end_time_quantum - start_time_quantum

    # Compare the computing times
    comparison = calculation_time_classical / calculation_time_quantum

    # Return the computation results as a JSON response
    return Response({
        'classical_time': calculation_time_classical,
        'quantum_time': calculation_time_quantum,
        'comparison': comparison
    }, status=status.HTTP_200_OK)