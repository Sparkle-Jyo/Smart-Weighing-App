function togglePassword() {

  const password = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");

  if (password.type === "password") {
      password.type = "text";
      eyeIcon.textContent = "visibility_off";
  } 
  else {
      password.type = "password";
      eyeIcon.textContent = "visibility";
  }

}


document.querySelectorAll(".slider").forEach(slider => {

  const valueDisplay = slider.closest("div").querySelector(".slider-value");

  function updateSlider() {
    const value = slider.value;
    const min = slider.min;
    const max = slider.max;

    const percent = ((value - min) / (max - min)) * 100;

    slider.style.background =
      `linear-gradient(to right, #16a34a ${percent}%, #e2e8f0 ${percent}%)`;

    valueDisplay.textContent = value + " cm";
  }

  slider.addEventListener("input", updateSlider);

  updateSlider();

});

// Demo balance system
let balance = 2000;
document.getElementById("balance").innerText = "₹" + balance;


// WEIGHT PROGRESS SYSTEM

let startWeight = 90;
let currentWeight = 82;
let targetWeight = 70;

let progress =
((startWeight - currentWeight) /
(startWeight - targetWeight)) * 100;

progress = Math.max(0, Math.min(progress, 100));

const circle = document.getElementById("weightProgressCircle");
const progressText = document.getElementById("progressText");

const circumference = 251.2;

const offset = circumference - (progress / 100) * circumference;

circle.style.strokeDashoffset = offset;

progressText.innerText = Math.round(progress) + "%";