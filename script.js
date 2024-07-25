//  ------------header-slider-----------

const images = document.querySelectorAll(".header-slider ul img");
const prevButton = document.querySelector(".control-prev");
const nextButton = document.querySelector(".control-next");

let currentIndex = 0;

function changeSlide() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[currentIndex].style.display = "block";
}
changeSlide();

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  changeSlide();
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  changeSlide();
});

// ---------products slider-----------

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
  item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
