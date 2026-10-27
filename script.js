document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada com sucesso.");

  const titulo = document.querySelector("h1");
  titulo.addEventListener("click", () => {
    alert("Atividade de Git e GitHub!");
  });
});
