document.addEventListener('DOMContentLoaded', function() {
    const customButton = document.querySelector('.custom-button');
    const customFileInput = document.querySelector('.custom-file-input');
    let csvData; // Variável global para armazenar os dados do CSV

    customButton.addEventListener('click', function() {
        customFileInput.click();
    });

    customFileInput.addEventListener('change', function() {
        const file = customFileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const csvContent = e.target.result;

                Papa.parse(csvContent, {
                    header: true,
                    dynamicTyping: true,
                    complete: function(results) {
                        csvData = results.data; // Armazena os dados do CSV na variável global
                        console.log(csvData);
                    }
                });
            };
            reader.readAsText(file);
        }
    });

    const chartTypeSelect = document.getElementById('chartType');
    const renderButton = document.getElementById('renderButton');

    renderButton.addEventListener('click', function() {
        if (csvData) {
            const selectedChartType = chartTypeSelect.value; // Obtém o tipo de gráfico selecionado
            renderChart(selectedChartType, csvData);
        }
    });
});
