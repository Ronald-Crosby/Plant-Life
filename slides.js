// pick all of the images and layer them based on the z-index

const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("img");

let currentSlide = 0;
let z = 1;

slideArea.addEventListener("click", function() {
  currentSlide = currentSlide + 1;
  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }
  z = z + 1;

  // the keyframes animation is removed for the image here
  images.forEach(function(image) {
    image.style.animation = "";
  });

  // picking the right image. the [] allow us to take a tag from the array based on a number. we could put a number into the [] and the function would return that number every time. instead we put a variable in which is incrementing on every click.
  images[currentSlide].style.zIndex = z;

  //keyframes added again here. this makes sure it works for every click, even after its been added to each image once. we are removing it if its there above.
  images[currentSlide].style.animation = "fade 0.5s";
});

slideArea.addEventListener("mouseover", function() {
  images.forEach(function(image) {
    const x = 100 * Math.random() - 50;
    const y = 100 * Math.random() - 50;

    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

slideArea.addEventListener("mouseout", function() {
  images.forEach(function(image) {
    image.style.transform = ``;
  });
});
