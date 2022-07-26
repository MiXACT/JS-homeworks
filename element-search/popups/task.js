const popupMain = document.getElementById('modal_main');
const popupSuccess = document.getElementById('modal_success');
const closeCross = Array.from(document.getElementsByClassName('modal__close'));
const successBtn = Array.from(document.getElementsByClassName('show-success'));


popupMain.classList.add('modal_active');

closeCross.forEach((item) => {
    item.onclick = () => {
        item.closest('.modal').classList.remove('modal_active');
    }
});

successBtn.forEach((item) => {
    item.onclick = () => {
        popupMain.classList.remove('modal_active');
        popupSuccess.classList.add('modal_active');
    }
});
