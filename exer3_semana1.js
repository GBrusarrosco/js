function calcularFatorial(num) {

    if(num === 0 || num === 1) {
        return 1;
    }

    let fatorial = 1;

    for(i = 2; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial;

}


let num;

do {

    num = prompt("Digite um número inteiro positivo: ")
    num = parseInt(num);

} while(isNaN(num));

const resultado = calcularFatorial(num);
alert("o fatorial de " + num + " é " + resultado)