/*==================== MENU SHOW style Y HIDDEN ====================*/
const styleSwitcher = document.getElementById("style-switcher"),
  styleToggle = document.getElementById("style-toggle"),
  styleClose = document.getElementById("style-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (styleToggle) {
  styleToggle.addEventListener("click", () => {
    styleSwitcher.classList.add("show-menu-style");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (styleClose) {
  styleClose.addEventListener("click", () => {
    styleSwitcher.classList.remove("show-menu-style");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const styleLink = document.querySelectorAll(".style_link");

function styleAction() {
  const styleSwitcher = document.getElementById("style-switcher");
  // When we click on each nav__link, we remove the show-menu class
  styleSwitcher.classList.remove("show-menu-style");
}
styleLink.forEach((n) => n.addEventListener("click", styleAction));
