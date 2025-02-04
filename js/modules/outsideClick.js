export default function outsideClick(element,events,callback){
  const html = document.documentElement;
  const outside = "data-outside";

  if(!element.hasAttribute(outside)){
    setTimeout(()=>{
      events.forEach((event)=>{
        html.addEventListener(event,handleOutsideClick);
      })
      html.setAttribute(outside,"");
    })
  }

  function handleOutsideClick(event){
    if(!element.contains(event.target)){
      events.forEach((event)=>{
        html.removeEventListener(event,handleOutsideClick);
        html.removeAttribute(outside);
      })
    }
    callback();
  }
}

