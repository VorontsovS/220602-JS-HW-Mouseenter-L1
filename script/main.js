let isCondition = true;
const elCat = document.getElementById('cat');

elCat.addEventListener('mouseenter', e => {
if (isCondition) {
    elCat.style.left= "200px";
}
else {
    elCat.style.left= "0px";
}
    isCondition=!isCondition;
});