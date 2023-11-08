document.getElementById('renderButton').addEventListener('click', function() {
    if (csvData) {
        const chartType = chartTypeSelect.value; // Obtém o tipo de gráfico selecionado
        renderChart(chartType, csvData);
    }
});

function renderChart(chartType, data) {
    const labels = data.map(row => row.label);
    const datasetLabel = 'Valores';
    const datasetData = data.map(row => row.value);

    const ctx = document.getElementById('myChart').getContext('2d');
    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: datasetLabel,
                data: datasetData,
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `Exemplo de Gráfico ${chartType.charAt(0).toUpperCase() + chartType.slice(1)}`
                }
            }
        }
    });
}
