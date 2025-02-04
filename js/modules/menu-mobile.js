
import outsideClick from "./outsideClick.js";

export default function initMenuMobile(){
    const btnMobile = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const events = ["click"];
    
    function handleClick(){
      menuList.classList.add('active');
      btnMobile.classList.add('active');

      outsideClick(this,events,()=>{
        menuList.classList.remove('active');
        btnMobile.classList.remove('active');
      })
    }
    
    btnMobile.addEventListener('click', handleClick);
    menuList.addEventListener('click',handleClick);
  }


