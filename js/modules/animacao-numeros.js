export default function initAnimacaoNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start;
        if (start > total) {
          console.log(start);
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 28 * Math.random());
    });
  }

  function handleMutatiton(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector(".gestao-numeros"); // ESTAMOS MARCANDO QUEM VAMOS OBSERVAR
  const observer = new MutationObserver(handleMutatiton);

  observer.observe(observerTarget, { attributes: true });
}
