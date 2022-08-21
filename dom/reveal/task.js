const div = Array.from(document.querySelectorAll('.reveal'));
let topY, botY;
let divY = {};


for (let i = 0; i < div.length; i++) {
    const {top, bottom} = div[i].getBoundingClientRect();
    divY[i] = [top, bottom];
}


function showUp(y0, y) {
    for (let i = 0; i < div.length; i++) {
        if (divY[i][0] >= y0 && divY[i][1] <= y) {
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
    showUp(topY, botY);
});
