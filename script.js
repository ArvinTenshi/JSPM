const button_menu = document.querySelector('.sidebar');
const sidebar = document.querySelector('.sidebar');
button_menu.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});
