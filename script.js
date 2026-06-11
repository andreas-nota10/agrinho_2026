// Som de clique
document.querySelectorAll('button, a.btn').forEach(el => {
    el.addEventListener('click', () => {
        const clickSound = document.getElementById('clickSound');
        if (clickSound) {
            clickSound.currentTime = 0;
            clickSound.play();
        }
    });
});

// Mostrar ou esconder detalhes nos cards
document.querySelectorAll('.saiba-mais').forEach(botao => {
    botao.addEventListener('click', () => {
        const detalhe = botao.nextElementSibling;
        detalhe.style.display = detalhe.style.display === 'none' ? 'block' : 'none';
    });
});
