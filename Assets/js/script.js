function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function setActive(element) {
  document
    .querySelectorAll(".bottom-menu a")
    .forEach(a => a.classList.remove("active"));
  element.classList.add("active");
}
