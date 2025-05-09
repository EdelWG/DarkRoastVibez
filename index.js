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
document.querySelectorAll('.coffee-button').forEach(button => {
  button.addEventListener('click', (event) => {
      let splash = document.createElement('div');
      splash.classList.add('splash');
      splash.style.left = `${event.clientX}px`;
      splash.style.top = `${event.clientY}px`;
      document.body.appendChild(splash);
      setTimeout(() => splash.remove(), 500);
  });
});
document.querySelectorAll('.featured-drink').forEach(drink => {
  drink.addEventListener('mouseenter', () => drink.classList.add('pulse'));
  drink.addEventListener('mouseleave', () => drink.classList.remove('pulse'));
});
window.addEventListener('scroll', () => {
  document.querySelectorAll('.latte-art').forEach(art => {
      let rect = art.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
          art.classList.add('reveal');
      }
  });
});
document.querySelector('.pot').addEventListener('mouseenter', () => {
  document.querySelector('.pot').classList.add('pour');
});
document.querySelector('.pot').addEventListener('mouseleave', () => {
  document.querySelector('.pot').classList.remove('pour');
});
document.querySelector('.caffeine-bar').addEventListener('mouseenter', () => {
  document.querySelector('.caffeine-bar').style.width = '100%';
});
document.querySelector('.caffeine-bar').addEventListener('mouseleave', () => {
  document.querySelector('.caffeine-bar').style.width = '0%';
});
let angle = 0;
setInterval(() => {
    angle += 1;
    document.querySelector('.beans').style.transform = `rotate(${angle}deg)`;
}, 50);
