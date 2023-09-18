const dropdownBtnLanguage = document.getElementById("btnLanguage");
const dropdownLanguageBox = document.getElementById("dropdownLanguageBox");
const arrowLanguage = document.getElementById("arrowLanguage");


const toggleDropdownLanguage = function () {
 dropdownLanguageBox.classList.toggle("show");
  arrowLanguage.classList.toggle("arrow");
};


dropdownBtnLanguage.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdownLanguage();
});


document.documentElement.addEventListener("click", function () {
  if (dropdownLanguageBox.classList.contains("show")) {
    toggleDropdownLanguage();
  }
});