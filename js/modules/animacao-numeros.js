export default function initAnimacaoNumeros() {
  function animaNumeros(){
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero)=>{
      const total = +numero.innerText;
      console.log(total);
    })
  }

  animaNumeros();
}