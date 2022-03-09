function conversaoDolar() {

    var valorMoeda = Number(document.getElementById("valor").value)

    var conversorMoedas = valorMoeda * 5.08

    var valorFixada = conversorMoedas.toFixed(2)

    document.querySelector("#resultado").innerHTML = "Valor em dólar é: R$ " + valorFixada          

    console.log(valorFixada)
}

function conversaoLibras() {

    var valorMoeda = Number(document.getElementById("valor").value)

    var conversorMoedas = valorMoeda * 5.62

    var valorFixada = conversorMoedas.toFixed(2)

    var valorConvertido = document.querySelector("#resultado").innerHTML = "Valor em libras é: £ " + valorFixada          

    console.log(valorFixada)                
}

function conversaoEuro() {

    var valorMoeda = Number(document.getElementById("valor").value)

    var conversorMoedas = valorMoeda * 5.51

    var valorFixada = conversorMoedas.toFixed(2)

    var valorConvertido = document.querySelector("#resultado").innerHTML = "Valor em euro é: € " + valorFixada          

    console.log(valorFixada)                 
}


    

         