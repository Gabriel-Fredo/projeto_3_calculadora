const visor = document.querySelector("#visor");
const teclado = document.querySelector("#teclado");

const reset = document.querySelector("#reset");

reset.addEventListener("click", function () {
  visor.value = "";
});

let arrastando = false;

teclado.addEventListener("mousedown", function () {
  arrastando = false;
});

teclado.addEventListener("mousemove", function () {
  arrastando = true;
});

teclado.addEventListener("click", function (event) {
  if (arrastando) return; // ignora se arrastou

  const botaoClicado = event.target.textContent;

  if (botaoClicado === "C" || botaoClicado === "=") return;
  visor.value = visor.value + botaoClicado;
});

const enviar = document.querySelector("#enviar")

enviar.addEventListener("click", function() {
   try {
    visor.value = eval(visor.value)
  } catch {
    visor.value = "Erro"
  }
})