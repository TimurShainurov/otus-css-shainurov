const body = document.querySelector('.page');
const openModal = document.querySelector('.menu__link--message');
const closeModal = document.querySelectorAll('.button');


function switchModal () {
    body.classList.toggle('page--scroll-locked');
}

openModal.addEventListener('click', switchModal);

closeModal.forEach((button) => button.addEventListener('click', switchModal));
