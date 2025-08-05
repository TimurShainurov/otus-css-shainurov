const body = document.querySelector('.page');
const openModal = document.querySelector('.menu__link--message');
const closeModal = document.querySelector('.button');


function switchModal () {
    body.classList.toggle('page--scroll-locked');
}

openModal.addEventListener('click', switchModal);
closeModal.addEventListener('click', switchModal);

