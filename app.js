const tabItems = document.querySelectorAll('.tab-item'); //symbols
const tabContentItems = document.querySelectorAll('.tab-content-item'); //3 items
function selectItem() {
    removeShow();
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    tabContentItem.classList.add('show');
}
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});