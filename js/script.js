function classToggle() {
  const navs = document.querySelectorAll('.nav-menu')
  
  navs.forEach(nav => nav.classList.toggle('toggle-show'));
}

document.querySelector('.nav-toggle')
  .addEventListener('click', classToggle);