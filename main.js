function cript(){
    //declarar variável de entrada
    let entrada = document.getElementById("text-box").value;

    //declarar variável de saída
    let saida = "";

    //looping de criptografia de texto
    for(let i = 0; i < entrada.length; i++){
        if(entrada.charAt(i) == "a"){
            saida += "ai";
        }else if(entrada.charAt(i) == "e"){
            saida += "enter";
        }else if(entrada.charAt(i) == "i"){
            saida += "imes";
        }else if(entrada.charAt(i) == "o"){
            saida += "ober";
        }else if(entrada.charAt(i) == "u"){
            saida += "ufat";
        }else{
            saida += entrada.charAt(i);
        }
    };

    //imprimir texto criptografado
    document.getElementById("resultado").innerHTML = saida;

    //ativar botão de copiar
    ativarCopiar()
}

function uncript(){
    //declarar variável de entrada
    let entrada = document.getElementById("text-box").value;

    //declarar variável de saída
    let saida = "";

    //descriptografia de texto
        saida = entrada.replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    //imprimir texto descriptografado
    document.getElementById("resultado").innerHTML = saida

    //ativar botão de copiar
    ativarCopiar()
}

function ativarCopiar(){
    //pegar botão e torná-lo visível
    copiarBtn = document.getElementById("copiar-btn");
    copiarBtn.style.display = "inline";
}

function copiar(){
    //pegar parágrafo de saída
    let resultado = document.getElementById("resultado");

    //copiar valor
    navigator.clipboard.writeText(resultado.textContent);

    //avisar que foi copiado
    alert("Texto copiado: " + resultado.textContent);
}