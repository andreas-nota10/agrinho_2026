// Abre e fecha respostas dos cards (FAQ interativo)

const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  item.addEventListener("click", () => {
    const resposta = item.querySelector(".resposta");

    if (resposta.style.display === "none") {
      resposta.style.display = "block";
    } else {
      resposta.style.display = "none";
    }
  });
});
