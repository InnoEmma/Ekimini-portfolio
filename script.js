const MobileMenu = document.querySelector(".mobile-menu-item");
const navImage = document.querySelector(".mobile-menu-toggle");
function loadContent() {
  document.addEventListener("click", nav);
}

function nav() {
  navImage.addEventListener("click", adding);
}

function adding() {
  MobileMenu.classList.toggle("active");
}

loadContent();
nav();
adding();

document.addEventListener("DOMContentLoaded", function () {
  const viewDetailButton = document.querySelector(".detail");
  const popupContainer = document.querySelector(".pop-up-container");
  const closeButton = document.querySelector(".pop-up-header h2:last-child");

  const wrapper = document.querySelector(".wrapper");

  viewDetailButton.addEventListener("click", (e) => {
    e.preventDefault();
    popupContainer.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    popupContainer.style.display = "none";
  });

  wrapper.addEventListener("click", (e) => {
    if (e.target === wrapper) {
      popupContainer.style.display = "none";
    }
  });
});

const popupContainer = document.querySelector(".pop-up-container");
const popupBox = document.querySelector(".pop-up-box");

popupContainer.addEventListener("click", (e) => {
  if (!popupBox.contains(e.target)) {
    popupContainer.classList.remove("active");
  }
});

const closeBtn = document.querySelector(".pop-up-header h2:last-child");
closeBtn.addEventListener("click", () => {
  popupContainer.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const scoreSection = document.querySelector(".total-card");
  const scoreBars = document.querySelectorAll(".score");
  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        scoreBars.forEach((bar) => {
          const score = bar.getAttribute("data-score");
          bar.style.width = `${score}%`;
        });
        hasAnimated = true;
      }
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(scoreSection);
});
