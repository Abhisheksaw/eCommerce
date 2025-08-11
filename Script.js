const topHeader = document.getElementById("top-header");
const mainHeader = document.getElementById("main-header");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const spacer = document.getElementById("spacer");

let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  if (menuOpen) {
    navMenu.classList.add("active");
    menuToggle.textContent = "✕";
  } else {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
  }
}

function closeMenu() {
  menuOpen = false;
  navMenu.classList.remove("active");
  menuToggle.textContent = "☰";
}

menuToggle.addEventListener("click", toggleMenu);

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    topHeader.classList.add("hide");
    mainHeader.classList.add("scrolled");
    closeMenu();
    spacer.style.height = "60px";
  } else {
    topHeader.classList.remove("hide");
    mainHeader.classList.remove("scrolled");
    spacer.style.height = "100px";
  }
});

// Hero
const mainCarouselData = [
  {
    image:
      "https://www.ethnicplus.in/cdn/shop/files/4.jpg?v=1752084367&width=2000",
    path: "/women/clothing/lengha_choli",
  },
  {
    image:
      "https://www.ethnicplus.in/cdn/shop/files/1_03ac5260-7141-4676-b1f8-d8318df825a4.jpg?v=1751950894&width=1500",
    path: "/women/clothing/women_dress",
  },
  {
    image:
      "https://www.ethnicplus.in/cdn/shop/files/3_37951304-c08e-44c9-874e-c66b063dc544.jpg?v=1752084367&width=2000",
    path: "/women/clothing/women_dress",
  },
  {
    image:
      "https://www.ethnicplus.in/cdn/shop/files/lehenga_choli_copy_1920x.jpg?v=1751608197",
    path: "/women/clothing/women_saree",
  },
];

const carouselSlide = document.getElementById("carousel-slide");
let currentIndex = 0;

mainCarouselData.forEach((item) => {
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = "";
  img.style.cursor = "pointer";

  carouselSlide.appendChild(img);
});

const imagesCount = mainCarouselData.length;

function updateCarousel() {
  carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Prev button
document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imagesCount) % imagesCount;
  updateCarousel();
  resetAutoPlay();
});

// Next button
document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imagesCount;
  updateCarousel();
  resetAutoPlay();
});

// Autoplay every 3 seconds
let autoPlayInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % imagesCount;
  updateCarousel();
}, 3000);

// Reset autoplay timer when user interacts
function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % imagesCount;
    updateCarousel();
  }, 3000);
}

updateCarousel();

// Pause on hover
document
  .querySelector(".carousel-container")
  .addEventListener("mouseenter", () => {
    clearInterval(autoPlayInterval);
  });
document
  .querySelector(".carousel-container")
  .addEventListener("mouseleave", () => {
    resetAutoPlay();
  });

document.querySelectorAll("a.nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1); // Remove #
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
