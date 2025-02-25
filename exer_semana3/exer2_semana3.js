
class Carro {
    constructor(marca, modelo, ano, cor, km, valorFipe) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.km = parseFloat(km); 
        this.valorFipe = parseFloat(valorFipe); 
    }

    
    anosUtilizacao() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }

    
    valorMercado() {
        const anosDeUso = new Date().getFullYear() - this.ano;
        const kmPorAno = this.km / anosDeUso;

        if (kmPorAno <= 30000) {
            return this.valorFipe * 1.1; 
        } else if (kmPorAno > 30000 && kmPorAno <= 50000) {
            return this.valorFipe; 
        } else {
            return this.valorFipe * 0.9; 
        }
    }
}


document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const marca = document.getElementById('marca').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const ano = parseInt(document.getElementById('ano').value);
    const cor = document.getElementById('cor').value.trim();
    const km = parseFloat(document.getElementById('km').value);
    const valorFipe = parseFloat(document.getElementById('valorFipe').value);

   
    const carro = new Carro(marca, modelo, ano, cor, km, valorFipe);

   
    const anosDeUso = carro.anosUtilizacao();
    const valorMercado = carro.valorMercado();


    const valorFipeFormatado = formatarMoeda(carro.valorFipe);
    const valorMercadoFormatado = formatarMoeda(valorMercado);

    
    const kmFormatado = km.toFixed(2);

  
    document.getElementById('resultado').innerHTML = `
        <strong>Marca:</strong> ${carro.marca}<br>
        <strong>Modelo:</strong> ${carro.modelo}<br>
        <strong>Ano:</strong> ${carro.ano}<br>
        <strong>Cor:</strong> ${carro.cor}<br>
        <strong>Kilometragem:</strong> ${kmFormatado} km<br>
        <strong>Valor FIPE:</strong> ${valorFipeFormatado}<br>
        <strong>Anos de Utilização:</strong> ${anosDeUso} anos<br>
        <strong>Valor de Mercado:</strong> ${valorMercadoFormatado}
    `;
});


function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}