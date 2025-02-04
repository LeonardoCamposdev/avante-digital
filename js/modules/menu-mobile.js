export default function initMenuMobile(){
    const btnMobile = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    
    function handleClick(){
      menuList.classList.add('active');
      btnMobile.classList.add('active');
    }
    
    btnMobile.addEventListener('click', handleClick);
  }


