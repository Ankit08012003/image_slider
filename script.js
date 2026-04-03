let index = 0;
let slider = document.getElementById("range");
let slides = document.getElementById("slides");
let total = 3;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 500}px)`;
  slider.value = index;
}

/* Buttons */
function nextSlide() {
  if (index < total - 1) {
    index++;
    updateSlide();
  }
}

function prevSlide() {
  if (index > 0) {
    index--;
    updateSlide();
  }
}

/* 🔥 REAL SLIDING */
slider.addEventListener("input", () => {
  let value = slider.value;

  slides.style.transform = `translateX(-${value * 500}px)`;
});