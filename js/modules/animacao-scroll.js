export function initAnimacaoScrollLeft(){
  const animacao = document.querySelectorAll("[data-anime='scroll-left']");

  function animaScroll(){
    const windowMetade = window.innerHeight * 0.8;
    animacao.forEach((item)=>{
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;
      if(distanciaTopo < 0){
        item.classList.add('ativo');
      }
    })
  }
  
  window.addEventListener('scroll',animaScroll);
  
}

//SCROLL RIGHTTTTTT
export function initAnimacaoScrollRight(){
  const animacao = document.querySelectorAll("[data-anime='scroll-right']");

  function animaScroll(){
    const windowMetade = window.innerHeight * 0.8;
    animacao.forEach((item)=>{
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;
      if(distanciaTopo < 0){
        item.classList.add('ativo');
      }
    })
  }
  
  window.addEventListener('scroll',animaScroll);
}

//SCROLL RIGHTTTTTT