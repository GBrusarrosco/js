function verificarPalindromo() {
    const text = document.getElementById("texto").value;
    
    const textoProcessado = text.replace(/\s+/g, "").toLowerCase();

    const textoInvertido = textoProcessado.split("").reverse().join("");
    if(textoProcessado === textoInvertido) {
        alert(`"${text}" é um palíndromo!`)
    } else {
        alert(`"${text}" não é um palíndromo.`);
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    const botao = document.getElementById("verificar");
    botao.addEventListener("click", verificarPalindromo);
});