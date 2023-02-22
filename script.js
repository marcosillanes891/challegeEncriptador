const textArea = document.querySelector(".entradaTexto");
const mensaje = document.querySelector(".textoEncriptado");






function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value= textoEncriptado
}



function encriptar(stringEncriptado){
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"] ];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0 ; i< matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])


        }
    }
    return stringEncriptado
}


































/*function encriptar(){
    var texto= document.getElementById("entrada_Texto").value.toLowerCase();
    var textCifrado= texto.replace(/e/igm, "enter");
    var textCifrado= textoCifrado.replace(/o/igm, "ober");
    var textCifrado= textoCifrado.replace(/i/igm, "imes");
    var textCifrado= textoCifrado.replace(/a/igm, "ai");
    var textCifrado= textoCifrado.replace(/u/igm, "ufat");

    document.getElementById("imgMuneco").style.display= "none" ;
    document.getElementById("mensajederecho").style.display= "none";
    document.getElementById("ingresoTexto").innerHTML = textCifrado;  
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display ="inherit";

}

function desencriptar(){
    var texto= document.getElementById("entrada_Texto").value.toLowerCase();
    var textCifrado= texto.replace(/enter/igm, "e");
    var textCifrado= textoCifrado.replace(/ober/igm, "o");
    var textCifrado= textoCifrado.replace(/imes/igm, "i");
    var textCifrado= textoCifrado.replace(/ai/igm, "a");
    var textCifrado= textoCifrado.replace(/ufat/igm, "u");

    document.getElementById("imgMuneco").style.display= "none";
    document.getElementById("mensajederecho").style.display= "none";
    document.getElementById("ingresoTexto").innerHTML = textCifrado;  
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display ="inherit";

}

function copiar(){
    var contenido = document.querySelector("#ingresoTexto");
    contenido.select();
    document.execCommand("copy");
    alert("Se copio")
}*/