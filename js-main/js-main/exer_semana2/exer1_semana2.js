function formatarData() {
    const diasDaSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    const dataAtual = new Date();


    //obter o dia da semana (0 - 6)
    const diaDaSemana = diasDaSemana[dataAtual.getDay()];

    const diaDoMes = dataAtual.getDate();

    const mes = meses[dataAtual.getMonth()];

    const ano = dataAtual.getFullYear();

    const dataFormatada = `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano}`;

    document.write(dataFormatada);

   
}

formatarData();