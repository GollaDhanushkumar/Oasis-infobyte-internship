const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    // Celsius to Kelvin
    const celToKel = (cel) => {
        let kelvin = (parseFloat(cel) + 273.15).toFixed(1);
        return kelvin;
    }

    // Kelvin to Celsius
    const kelToCel = (kel) => {
        let celsius = (parseFloat(kel) - 273.15).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    } else if (valueTemp == 'fah') {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    } else {
        if (valueTemp == 'kel') {
            document.getElementById("result").innerHTML = kelToCel(inputTemp) + "&#176; Celsius";
        } else {
            document.getElementById("result").innerHTML = celToKel(inputTemp) + " Kelvin";
        }
    }
}
