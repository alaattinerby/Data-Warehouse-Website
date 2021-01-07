const menuOpen = document.getElementById('menuOpen');
const navLinks = document.getElementById('nav-links');

menuOpen.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});