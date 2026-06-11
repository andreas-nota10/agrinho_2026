// Controle de música
const musica = document.getElementById('musicaFundo');
document.getElementById('botao-tocar').addEventListener('click', () => musica.play());
document.getElementById('botao-pausar').addEventListener('click', () => musica.pause());

// Som de clique
document.querySelectorAll('button, a.btn, input[type="submit"]').forEach(el => {
  el.addEventListener('click', () => {
    const clickSound = document.getElementById('clickSound');
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play();
    }
  });
});

// Cards de curiosidade interativos
document.querySelectorAll('.curiosidade-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('show');
  });
});
