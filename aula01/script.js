
function media(){

    var notaDoPrimeiroBimestre = parseInt(document.getElementById("nota01").value)
    var notaDoSegundoBimestre = parseInt(document.getElementById("nota02").value)
    var notaDoTerceiroBimestre = parseInt(document.getElementById("nota03").value)
    var notaDoQuartoBimestre = parseInt(document.getElementById("nota03").value)

    var notaSoma = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre

    var media = notaSoma / 4

    var mediaFixada = media.toFixed(1)

    if(mediaFixada >= 7) {
        condicao = "Aprovado!"

    } else if (mediaFixada < 4){
        condicao = "Reprovado!"

    } else {
        condicao = "Final!"
    }

    var mediaFixada = media.toFixed(2)

    document.getElementById("resultado").innerHTML = "Resultado: " + mediaFixada + " - " + condicao

}

// Revisão
// variáveis, strings, console.log, toFixed, operações, matemáticas, concatenação