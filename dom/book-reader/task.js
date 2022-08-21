const book = document.querySelector('.book');
const fontCtrl = document.querySelector('.book__control');
let prevFont = document.querySelector('.font-size_active');

function fontResize(size) {
    if (size) book.setAttribute('class', `book book_fs-${size}`);
    else book.setAttribute('class', 'book');
}


fontCtrl.onclick = function(event) {
    let curFont = event.target;
    prevFont.classList.remove('font-size_active');
    curFont.classList.add('font-size_active');
    prevFont = curFont;
    fontResize(curFont.getAttribute('data-size'));
    return false;
}
