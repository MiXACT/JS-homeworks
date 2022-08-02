const listButtons = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownList = Array.from(document.querySelectorAll('.dropdown__list'));
const listItems = Array.from(document.querySelectorAll('li.dropdown__item'));


function showList(listPos) {
    if (dropdownList[listPos].className.includes('dropdown__list_active')) {
        dropdownList[listPos].classList.remove('dropdown__list_active');
    } else {
        dropdownList[listPos].classList.add('dropdown__list_active');
    }
}

function makeShowList(index) {
    return function() { 
        showList(index);
    }
}


for (let i = 0; i < listButtons.length; i++) {
    listButtons[i].addEventListener('click', makeShowList(i));
    listItems.forEach((item) => {
        item.onclick = () => {
            if (item.closest('ul') == dropdownList[i]) {
                dropdownList[i].classList.remove('dropdown__list_active');
                listButtons[i].textContent = item.textContent;
                return false;
            };
        };
    });
};
