const section = document.getElementById('section')
const nav = document.getElementById('navBar2')

section.addEventListener('click', () => {
  nav.style.display = "flex";
})
nav.addEventListener('mouseleave', () => {
  nav.style.display = "none";
})
