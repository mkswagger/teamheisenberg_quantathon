// Extracted eigenstate values (replace with your eigenstate data)
const eigenstateRealPart = [0.1, 0.2, 0.3, 0.4, 0.5]; // Replace with your real part data
const eigenstateImaginaryPart = [0.2, 0.3, 0.4, 0.5, 0.6]; // Replace with your imaginary part data
const basisStates = Array.from({ length: eigenstateRealPart.length }, (_, i) => i);

// Create a line chart using Plotly.js
const chartData = [
    {
        x: basisStates,
        y: eigenstateRealPart,
        type: 'scatter',
        mode: 'lines',
        name: 'Real Part',
        line: { color: 'blue' },
    },
    {
        x: basisStates,
        y: eigenstateImaginaryPart,
        type: 'scatter',
        mode: 'lines',
        name: 'Imaginary Part',
        line: { color: 'red' },
    },
];

const layout = {
    title: 'Eigenstate Waveform',
    xaxis: { title: 'Basis State' },
    yaxis: { title: 'Value' },
};

// Plot the chart in the 'eigenstate-chart' div
Plotly.newPlot('eigenstate-chart', chartData, layout);
