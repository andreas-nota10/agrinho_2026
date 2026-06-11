// Controle de música
const musica = document.getElementById('musicaFundo');
document.getElementById('tocar-musica').addEventListener('click', () => musica.play());
document.getElementById('parar-musica').addEventListener('click', () => musica.pause());

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

// Gráfico de energias
const ctx = document.getElementById('graficoEnergias').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Solar', 'Eólica', 'Hidrelétrica', 'Biomassa', 'Biogás'],
    datasets: [{
      label: 'Uso (%)',
      data: [40, 15, 25, 10, 10],
      backgroundColor: [
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 99, 132, 0.7)'
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Fontes de Energia Mais Usadas no Meio Rural' }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Percentual de Uso (%)' } }
    }
  }
});
