function isPrime(num) {
    if(num <= 1) {
        return false;
    } 

    if(num === 2) {
        return true;
    }

    if(num % 2 === 0) {
        return false;
    }

    for(i = 3; i <= Math.sqrt(num); i += 2) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}


let num;

do {
    num = prompt("Digite um número inteiro positivo: ");
    num = parseInt(num); // o parseInt é uma função nativa do Js que extrai um valor inteiro de uma string em formato númerico
} while(isNaN(num) || num <= 0); // aqui verifica se o valor obtido do prompt é um número valido (primeira validação) ou se o valor é menor ou igual a 0 (segunda validação)

if(isPrime(num)) { 
    alert(num + " é um número primo");
} else {
    alert(num + " não é um número primo");
}