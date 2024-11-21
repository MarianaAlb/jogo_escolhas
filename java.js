function mostrarSecao(id) {
    const secoes = document.querySelectorAll("section");
  
    secoes.forEach((secao) => {
      secao.style.display = "none";
    });
  
    const secaoAtiva = document.getElementById(id);
    if (secaoAtiva) {
      secaoAtiva.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function () {
  mostrarSecao("inicio");
});
function reiniciar() {
    mostrarSecao("inicio"); 
}
document.getElementById('musicaFundo').volume = 0.2;
