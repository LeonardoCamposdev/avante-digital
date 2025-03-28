export default function initIntroducaoCarrosel(){
  const imgs = document.querySelector("#img");
  const img = document.querySelectorAll("#img img");

  let idx = 0;

  function carrosel() {
    idx++;

    if (idx > img.length - 1) {
      idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 1075}px)`;
  }

  setInterval(carrosel, 2800);
}

