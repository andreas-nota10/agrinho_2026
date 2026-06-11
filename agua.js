// Botões de áudio
document.getElementById('botao-tocar').addEventListener('click', () => {
    document.getElementById('musicaFundo').play();
});

document.getElementById('botao-pausar').addEventListener('click', () => {
    document.getElementById('musicaFundo').pause();
});

// Som de clique em todos os botões e links com classe btn
document.querySelectorAll('button, a.btn, input[type="submit"]').forEach(el => {
    el.addEventListener('click', () => {
        const clickSound = document.getElementById('clickSound');
        if (clickSound) {
            clickSound.currentTime = 0;
            clickSound.play();
        }
    });
});
