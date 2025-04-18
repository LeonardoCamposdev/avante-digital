export default function initAnimacaoNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    if(numeros.length){
        function animaNumeros() {
            numeros.forEach((numero) => {
              const total = +numero.innerText;
              const incremento = Math.floor(total / 100);
        
              let start = 0;
              const timer = setInterval(() => {
                start = start + incremento;
                numero.innerText = start;
        
                if (start > total) {
                  numero.innerText = total;
                  clearInterval(timer);
                }
              }, 27 * Math.random());
            });
          }
        
          function handleObserver(mutation) {
            if (mutation[0].target.classList.contains("ativo")) {
              observer.disconnect();
              animaNumeros();
            }
          }
        
          const observerTarget = document.querySelector(".gestao-numeros");
          const observer = new MutationObserver(handleObserver);
        
          observer.observe(observerTarget, { attributes: true });
    }
}