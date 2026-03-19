// Select elements
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progressBars = document.querySelectorAll(".progress-percent");
const progressTexts = document.querySelectorAll(".progress-text span");

// Your skill percentages (match order in HTML)
const progressBarPercents = [80, 70, 50, 75, 65];

// Main scroll function
window.addEventListener("scroll", () => {
  makeNavbarSticky();
  highlightNavbarLinks();
  animateProgressBars();
});

// Sticky Navbar
function makeNavbarSticky() {
  if (window.scrollY >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Highlight active navbar link
function highlightNavbarLinks() {
  sections.forEach((section, i) => {
    if (
      window.scrollY >= section.offsetTop - 100 &&
      window.scrollY < section.offsetTop + section.offsetHeight
    ) {
      navbarLinks.forEach((link) => {
        link.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });
}

// Animate progress bars when section 2 is visible
function animateProgressBars() {
  const section2 = document.querySelector("#section-2");

  if (window.scrollY >= section2.offsetTop - 300) {
    progressBars.forEach((bar, i) => {
      bar.style.width = progressBarPercents[i] + "%";
      progressTexts[i].textContent = progressBarPercents[i];
    });
  }
}