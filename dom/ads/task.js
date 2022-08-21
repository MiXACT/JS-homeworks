const rotators = Array.from(document.querySelectorAll('.rotator'));

function rotateOn(el) {
    let curAd = el.children;
    let i = 1;
    setInterval(() => {
        curAd[i - 1].classList.remove('rotator__case_active');
        if (curAd[i - 1] == el.lastElementChild) i = 0;
        curAd[i].classList.add('rotator__case_active');
        i++;
    }, 1000);
}

rotators.forEach(ad => {
    rotateOn(ad);
});
