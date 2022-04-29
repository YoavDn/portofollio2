const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const letsTalkBtn = document.querySelector('.lets-talk-btn');
const btnCloseModal = document.querySelector('.btn-close-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
letsTalkBtn.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
