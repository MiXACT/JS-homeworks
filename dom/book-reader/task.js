const book = document.querySelector('.book');
const fontCtrl = document.querySelector('.book__control');


function fontResize(size) {
    if (size) book.setAttribute('class', `book book_fs-${size}`);
    else book.setAttribute('class', 'book');
}


fontCtrl.onclick = function(event) {
    let curFont = event.target;
    fontResize(curFont.getAttribute('data-size'));
    return false;
}
