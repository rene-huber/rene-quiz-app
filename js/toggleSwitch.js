const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const darkMode = document.querySelector('[data-js="dark-mode"]');

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    darkMode.classList.add("dark-mode");
  } else {
    darkMode.classList.remove("dark-mode");
  }
});
