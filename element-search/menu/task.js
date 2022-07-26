const menuSub = Array.from(document.querySelectorAll('.menu__item ul'));
const menuLink = Array.from(document.querySelectorAll('.menu__item a'));
let oldIndex, activeMenu;


for (let i = 0; i < menuSub.length; i++) {
    menuLink.forEach((link) => {
        if (link.closest('.menu__item') == menuSub[i].closest('.menu__item')) {
            link.onclick = () => {
                if (oldIndex != undefined && activeMenu != i) {
                    menuSub[oldIndex].classList.remove('menu_active');
                    menuSub[i].classList.add('menu_active');
                    activeMenu = i;
                } else if (activeMenu == i) {
                    menuSub[oldIndex].classList.remove('menu_active');
                    activeMenu = null;
                } else {
                    menuSub[i].classList.add('menu_active');
                    activeMenu = i;
                };
                oldIndex = i;
                return false;
            };
        };
    });
};
