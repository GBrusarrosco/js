// Classes POO
class Pessoa {
    constructor(nome, email, telefoneFixo, telefoneCelular, dataNascimento) {
        this.nome = nome;
        this.email = email;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
        this.dataNascimento = dataNascimento;
    }

    getNome() {
        return this.nome;
    }

    getEmail() {
        return this.email;
    }

    getTelefoneFixo() {
        return this.telefoneFixo;
    }

    getTelefoneCelular() {
        return this.telefoneCelular;
    }

    getDataNascimento() {
        return this.dataNascimento;
    }
}

class Professor extends Pessoa {
    constructor(nome, email, telefoneFixo, telefoneCelular, dataNascimento, area, lattes) {
        super(nome, email, telefoneFixo, telefoneCelular, dataNascimento);
        this.area = area;
        this.lattes = lattes;
    }

    getArea() {
        return this.area;
    }

    getLattes() {
        return this.lattes;
    }
}

class Aluno extends Pessoa {
    constructor(nome, email, telefoneFixo, telefoneCelular, dataNascimento, curso) {
        super(nome, email, telefoneFixo, telefoneCelular, dataNascimento);
        this.curso = curso;
    }

    getCurso() {
        return this.curso;
    }
}

function atualizarFormulario() {
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

  
    const resultado = document.getElementById('resultado');
    resultado.classList.add('hidden');

    if (tipo === 'professor') {
        document.getElementById('areaLattes').classList.remove('hidden');
        document.getElementById('curso').classList.add('hidden');
    } else {
        document.getElementById('areaLattes').classList.add('hidden');
        document.getElementById('curso').classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    Inputmask({ mask: "(99) 9999-9999" }).mask(document.getElementById('telefoneFixo'));
    Inputmask({ mask: "(99) 99999-9999" }).mask(document.getElementById('telefoneCelular'));
    Inputmask({ mask: "99/99/9999" }).mask(document.getElementById('dataNascimento'));

    
    document.querySelectorAll('input[name="tipo"]').forEach(radio => {
        radio.addEventListener('change', atualizarFormulario);
    });

    
    atualizarFormulario();

    
    document.getElementById('formCadastro').addEventListener('submit', function(e) {
        e.preventDefault();

        const tipo = document.querySelector('input[name="tipo"]:checked').value;
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefoneFixo = document.getElementById('telefoneFixo').value;
        const telefoneCelular = document.getElementById('telefoneCelular').value;
        const dataNascimento = document.getElementById('dataNascimento').value;

        let objeto;
        if (tipo === 'professor') {
            const area = document.getElementById('area').value;
            const lattes = document.getElementById('lattes').value;
            objeto = new Professor(nome, email, telefoneFixo, telefoneCelular, dataNascimento, area, lattes);
        } else {
            const curso = document.getElementById('cursoInput').value;
            objeto = new Aluno(nome, email, telefoneFixo, telefoneCelular, dataNascimento, curso);
        }

        exibirResultado(objeto);
        this.reset();
    });
});


function exibirResultado(objeto) {
    const resultado = document.getElementById('resultado');
    resultado.classList.remove('hidden');

    document.getElementById('nomeResultado').textContent = objeto.getNome();
    document.getElementById('emailResultado').textContent = objeto.getEmail();
    document.getElementById('telefoneFixoResultado').textContent = objeto.getTelefoneFixo();
    document.getElementById('telefoneCelularResultado').textContent = objeto.getTelefoneCelular();
    document.getElementById('dataNascimentoResultado').textContent = objeto.getDataNascimento();
    document.getElementById('tipoResultado').textContent = objeto.constructor.name;

    if (objeto instanceof Professor) {
        document.getElementById('areaResultado').firstElementChild.textContent = objeto.getArea();
        document.getElementById('lattesResultado').firstElementChild.textContent = objeto.getLattes();
        document.getElementById('areaResultado').classList.remove('hidden');
        document.getElementById('lattesResultado').classList.remove('hidden');
        document.getElementById('cursoResultado').classList.add('hidden');
    } else {
        document.getElementById('cursoResultado').firstElementChild.textContent = objeto.getCurso();
        document.getElementById('cursoResultado').classList.remove('hidden');
        document.getElementById('areaResultado').classList.add('hidden');
        document.getElementById('lattesResultado').classList.add('hidden');
    }
}