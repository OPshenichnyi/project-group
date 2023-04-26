(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-main-open]"),
      closeModalBtn: document.querySelector("[data-main-close]"),
      modal: document.querySelector("[data-main]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();