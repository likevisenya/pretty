function minutosParaSegundos(minutos) {
    var segundos = minutos * 60
    return segundos;
}

var segundos = minutosParaSegundos(44)
console.log("O valor em segundos é de: " + segundos)