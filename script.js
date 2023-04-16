const toggleSwitch = document.querySelector("input[type='checkbox']");
const navigation = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function imageMode(color) {
  image1.src = `img/undraw_conceptual_idea_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_proud_coder_${color}.svg`;
}

function lightMode() {
  navigation.style.backgroundColor = "rgb (0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb (255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("light");
}

function darkMode() {
  navigation.style.backgroundColor = "rgb (255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb (0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("dark");
}

function switchTheme(ev) {
  if (ev.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    lightMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    darkMode();
  }
}

toggleSwitch.addEventListener("change", switchTheme);
