const filterButtons = document.querySelectorAll(".filters button");
const galleryItems = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");
const closeBtn = lightbox.querySelector(".close");
const prevBtn = lightbox.querySelector(".prev");
const nextBtn = lightbox.querySelector(".next");
const containerBtn = document.querySelector(".container button");

let currentIndex = 0;

// Filter Functionality
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    galleryItems.forEach((img) => {
      img.style.display =
        filter === "all" || img.dataset.category === filter ? "block" : "none";
    });
  });
});

// Call to Action Button
containerBtn.addEventListener("click", () => {
  window.location.href = "#gallery";
});

// Lightbox Functionality
galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.style.width = "50%";
    lightboxImg.style.height = "80%";
    lightboxImg.style.transition = "0.2s";
    currentIndex = index;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
});

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    currentIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
  } else if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
  }
});
