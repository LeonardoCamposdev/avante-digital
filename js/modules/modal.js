export default function initModal() {
  const btnEnviar = document.querySelector('[data-modal="enviar"]');
  const modalContainer = document.querySelector(".modal-container");

  if (btnEnviar && modalContainer) {
    function openModal(event) {
      event.preventDefault();

      modalContainer.classList.add("ativo");
    }

    btnEnviar.addEventListener("click", openModal);
  }
}
