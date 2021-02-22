const openModalButton = document.querySelector('#openModal');
const modalWrapper = document.querySelector('.modal-wrapper');


openModalButton.addEventListener('click', () =>{
    modalWrapper.classList.remove('invisible');
})

document.addEventListener('keydown', (e) => {
    const isEscKey = e.key == 'Escape';
    const notContainInvisibleClass = !modalWrapper.classList.contains('invisible')
    if(isEscKey && notContainInvisibleClass){
        modalWrapper.classList.add('invisible');
    }
})