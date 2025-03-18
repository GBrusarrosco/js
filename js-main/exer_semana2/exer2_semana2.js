function atualizarRelogio() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const horarioFormatado = `${hours}:${minutes}:${seconds}`;

    document.getElementById("relogio").textContent = horarioFormatado;

    setTimeout(atualizarRelogio, 1000);
}

atualizarRelogio();




