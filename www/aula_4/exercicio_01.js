function converterParaFahrenheit(celsius) {
    var fahrenheit = (celsius * 1.8) + 32
    return fahrenheit;
}

var fahrenheit = converterParaFahrenheit(34)
console.log("A temperatura em Fahrenheit é de: " + fahrenheit)
