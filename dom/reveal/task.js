const div = Array.from(document.querySelectorAll('.reveal'));
let topY, botY;
let divY = {};

// коэффициент для получения абсолютных координат html элемента
let deltaY;


for (let i = 0; i < div.length; i++) {
    const {top, bottom} = div[i].getBoundingClientRect();
    divY[i] = [top, bottom];
}


function showUp(y0, y, k) {
    for (let i = 0; i < div.length; i++) {

        // k - поправочный коэффициент для получения абсолютных координат
        if (divY[i][0] + k >= y0 && divY[i][1] + k <= y) {
            if (!div[i].className.includes('reveal_active')) {
                div[i].classList.add('reveal_active');
            }
        } else if (div[i].className.includes('reveal_active')) {
            div[i].classList.remove('reveal_active');
        }        
    }
}


window.addEventListener('scroll', () => {
    topY = window.scrollY;
    botY = topY + window.innerHeight;
    
    // в deltaY сохраняется текущая прокрутка по Y при первоначальной загрузке страницы;
    // данный поправочный коэффициент нужен для определения абсолютных координат html элемента,
    // например, при обновлении страницы после прокрутки
    if (!deltaY) deltaY = topY;
    showUp(topY, botY, deltaY);
});
