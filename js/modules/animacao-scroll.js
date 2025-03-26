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

//SCROLL UPPPPPPP
export function initAnimacaoScrollUp(){
  const animacao = document.querySelectorAll("[data-anime='scroll-up']");

  function animaScroll(){
    const windowMetade = window.innerHeight * 0.7;
    animacao.forEach((item)=>{
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;
      if(distanciaTopo < 0){
        item.classList.add('ativo');
      }
    })
  }
  
  window.addEventListener('scroll',animaScroll);
}
//SCROLL UPPPPPPP

//SCROLL DOWNNN
export function initAnimacaoScrollDown(){
  const animacao = document.querySelectorAll("[data-anime='scroll-down']");

  function animaScroll(){
    const windowMetade = window.innerHeight * 0.7;
    animacao.forEach((item)=>{
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;
      if(distanciaTopo < 0){
        item.classList.add('ativo');
      }
    })
  }
  
  window.addEventListener('scroll',animaScroll);
}
//SCROLL DOWNNN