const menuSub = Array.from(document.querySelectorAll('.menu__item ul'));
const menuLink = Array.from(document.querySelectorAll('.menu__item a'));
let oldIndex;


for (let i = 0; i < menuSub.length; i++) {
    menuLink.forEach((link) => {
        if (link.closest('.menu__item') == menuSub[i].closest('.menu__item')) {
            link.onclick = () => {
                if (oldIndex != undefined) {
                    menuSub[oldIndex].classList.remove('menu_active');
                };
                menuSub[i].classList.add('menu_active');
                oldIndex = i;
                return false;
            };
        };
    });
};
