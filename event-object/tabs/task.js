const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsCont = Array.from(document.querySelectorAll('.tab__content'));
let oldIndex = 0;


function showContent(index) {
    tabs[oldIndex].classList.remove('tab_active');
    tabsCont[oldIndex].classList.remove('tab__content_active');
    tabs[index].classList.add('tab_active');
    tabsCont[index].classList.add('tab__content_active');
    oldIndex = index;
}

function makeShowContent(index) {
    return function() { 
        showContent(index);
    }
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', makeShowContent(i));
}
