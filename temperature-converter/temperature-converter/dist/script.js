function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var resultsElement = document.getElementById('results');

    if (isNaN(temperature)) {
        resultsElement.textContent = 'Please enter a valid temperature.';
        return;
    }

    switch (unit) {
        case 'fahrenheit':
            var celsius = (temperature - 32) * (5/9);
            var kelvin = celsius + 273.15;
            resultsElement.textContent = `Celsius: ${celsius.toFixed(2)} °C, Kelvin: ${kelvin.toFixed(2)} K`;
            break;
        case 'celsius':
            var fahrenheit = (temperature * (9/5)) + 32;
            var kelvin = temperature + 273.15;
            resultsElement.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F, Kelvin: ${kelvin.toFixed(2)} K`;
            break;
        case 'kelvin':
            var celsius = temperature - 273.15;
            var fahrenheit = (celsius * (9/5)) + 32;
            resultsElement.textContent = `Celsius: ${celsius.toFixed(2)} °C, Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
            break;
        default:
            resultsElement.textContent = 'Invalid unit selected.';
    }
}