const div = Array.from(document.querySelectorAll('.reveal'));


window.addEventListener('scroll', () => {
    for (let i = 0; i < div.length; i++) {
        const {top, bottom} = div[i].getBoundingClientRect();
        if (top >= 0 && bottom <= window.innerHeight) {
            if (!div[i].className.includes('reveal_active')) {
                div[i].classList.add('reveal_active');
            }
        } else if (div[i].className.includes('reveal_active')) {
            div[i].classList.remove('reveal_active');
        }
    }
});
