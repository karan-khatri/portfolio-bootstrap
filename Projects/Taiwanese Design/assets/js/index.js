const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('nav-list');

menuButton.addEventListener('click', function () {
  if (menu.style.display == 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
});
