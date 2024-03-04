const bxUser = document.getElementById('bx-user');
const activeSections1 = document.getElementById('active-sections-1');
const close = document.getElementById('close');

bxUser.addElementById('click', function () {
    activeSections1.classList.add('active-sections-1');
});

close.addElementById('click', function () {
    sidebar.classList.remove('active-sidebar');
});