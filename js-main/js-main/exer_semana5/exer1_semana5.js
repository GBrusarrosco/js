// Classe para gerenciar o contador
class Contador {
    constructor() {
        this.homens = 0;
        this.mulheres = 0;
        this.container = document.getElementById('contadorContainer');
        this.criarInterface();
    }

    criarInterface() {
        const estiloGlobal = document.createElement('style');
        estiloGlobal.textContent = `
            .contador {
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: 2rem auto;
                padding: 20px;
                background: #2c2c2c;
                border-radius: 15px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                color: white;
                text-align: center;
            }
            .grupo {
                display: flex;
                justify-content: space-around;
                margin: 20px 0;
            }
            .contador-item {
                background: #3a3a3a;
                padding: 20px;
                border-radius: 10px;
                flex: 1;
                margin: 0 10px;
                transition: transform 0.2s;
            }
            .contador-item:hover {
                transform: translateY(-5px);
            }
            .icone {
                font-size: 40px;
                margin-bottom: 15px;
            }
            .botao {
                background: #4CAF50;
                color: white;
                border: none;
                padding: 10px 20px;
                margin: 5px;
                border-radius: 5px;
                cursor: pointer;
                transition: background 0.3s;
            }
            .botao:hover {
                background: #45a049;
            }
            .botao-decrementar {
                background: #f44336;
            }
            .botao-decrementar:hover {
                background: #e53935;
            }
            .total {
                font-size: 24px;
                margin-top: 30px;
                padding: 15px;
                background: #212121;
                border-radius: 10px;
            }
        `;
        document.head.appendChild(estiloGlobal);

        // Container principal
        const contadorDiv = document.createElement('div');
        contadorDiv.className = 'contador';

        // Título
        const titulo = document.createElement('h2');
        titulo.textContent = 'Contador de Pessoas';
        contadorDiv.appendChild(titulo);

        // Grupo de contadores (Homens/Mulheres)
        const grupo = document.createElement('div');
        grupo.className = 'grupo';

        // Contador de Homens
        const homemDiv = this.criarContadorItem('♂', 'Homens');
        grupo.appendChild(homemDiv);

        // Contador de Mulheres
        const mulherDiv = this.criarContadorItem('♀', 'Mulheres');
        grupo.appendChild(mulherDiv);

        contadorDiv.appendChild(grupo);

        // Display do Total
        this.totalDisplay = document.createElement('div');
        this.totalDisplay.className = 'total';
        this.atualizarTotal();
        contadorDiv.appendChild(this.totalDisplay);

        this.container.appendChild(contadorDiv);
    }

    criarContadorItem(icone, titulo) {
        const div = document.createElement('div');
        div.className = 'contador-item';

        // Ícone principal (título)
        const iconeSpan = document.createElement('span');
        iconeSpan.className = 'icone';
        iconeSpan.textContent = icone;
        div.appendChild(iconeSpan);

        // Título da seção
        const tituloP = document.createElement('p');
        tituloP.textContent = titulo;
        div.appendChild(tituloP);

        // Botões e número principal
        const botoesDiv = document.createElement('div');

        const btnDecrementar = document.createElement('button');
        btnDecrementar.className = 'botao botao-decrementar';
        btnDecrementar.textContent = '-';
        botoesDiv.appendChild(btnDecrementar);

        // Número principal da contagem
        const display = document.createElement('span');
        display.style.fontSize = '24px';
        display.style.fontWeight = 'bold';
        display.style.margin = '0 20px';
        display.textContent = '0'; // Contagem inicial
        botoesDiv.appendChild(display);

        const btnIncrementar = document.createElement('button');
        btnIncrementar.className = 'botao';
        btnIncrementar.textContent = '+';
        botoesDiv.appendChild(btnIncrementar);

        div.appendChild(botoesDiv);

        if (titulo === 'Homens') {
            btnIncrementar.addEventListener('click', () => this.atualizarContagem('homens', 1));
            btnDecrementar.addEventListener('click', () => this.atualizarContagem('homens', -1));
            div.setAttribute('data-tipo', 'homens'); // Identifica o tipo
            this.displayHomens = display; // Armazena referência ao display
        } else {
            btnIncrementar.addEventListener('click', () => this.atualizarContagem('mulheres', 1));
            btnDecrementar.addEventListener('click', () => this.atualizarContagem('mulheres', -1));
            div.setAttribute('data-tipo', 'mulheres'); // Identifica o tipo
            this.displayMulheres = display; // Armazena referência ao display
        }

        return div;
    }

    atualizarContagem(tipo, valor) {
        if (tipo === 'homens') {
            this.homens = Math.max(0, this.homens + valor);
            this.displayHomens.textContent = this.homens;
        } else {
            this.mulheres = Math.max(0, this.mulheres + valor);
            this.displayMulheres.textContent = this.mulheres;
        }
        this.atualizarTotal();
    }

    atualizarTotal() {
        this.totalDisplay.textContent = `Total: ${this.homens + this.mulheres}`;
    }
}

// Inicializar o contador
document.addEventListener('DOMContentLoaded', () => {
    new Contador();
});