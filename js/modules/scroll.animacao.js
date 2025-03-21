export default function initScrollAnimacao(){

}

const animacaoLeft = document.querySelectorAll("[data-anima='scroll-left']");

function activeScrollLeft(){
  const windowMetade = window.innerHeight * 0.8;
  animacaoLeft.forEach((item)=>{
    const distanciaTopo = item.getBoundingClientRect().top - windowMetade;
    console.log(distanciaTopo)
    if(distanciaTopo <= 0){
      item.classList.add('xesqq');
    }
  })
}

window.addEventListener('scroll',activeScrollLeft);