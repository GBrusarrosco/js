function isNumber(dado) {
    return !isNaN(dado) && !isNaN(parseFloat(dado));
}

function isBoolean(dado) {
    return dado.toLowerCase() === "true" || dado.toLowerCase() === "false";
}


let dado = prompt("Digite algum valor: ");

const confirmacao = confirm("Você deseja verificar o tipo do dado informado ?");

if(confirmacao) {

    let tipoDado;

    if(isBoolean(dado)) {

        tipoDado = "boolean";

    } else if (isNumber(dado)) {

        tipoDado = "number";

    } else {

        tipoDado = "string"

    }

    document.write("O tipo do dado informado é: " + tipoDado);
} else {
    
    document.write("Obrigado por visitar essa página.");

}