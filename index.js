function showWelcome() {
  alert("Welcome to the vibe! Let’s brew something awesome.");
}
function filterMenu(type) {
  const items = document.querySelectorAll('.menu .item');

  items.forEach(item => {
    if (type === 'all') {
      item.style.display = 'block';
    } else {
      if (item.classList.contains(type)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
}
});
}
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}
console.log(document.getElementById("navLinks"));

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}
