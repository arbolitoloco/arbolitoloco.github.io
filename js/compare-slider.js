function slideCompare(event){
  console.log(event.dataset.cont);
  const sliderPos = event.value;
  const slider = document.getElementById(event.dataset.cont);
  // Update the width of the foreground image
  const foreImg = slider.querySelector('.foreground-img');
  foreImg.style.width = sliderPos + '%';
  // Update the position of the slider button
  const btn = slider.querySelector('.slider-button');
  btn.style.left = `calc(${sliderPos}% - 18px)`;
}



