document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;
  const toggleIcon = document.getElementById("toggle-icon");

  function updateTheme(isLight) {
    if (isLight) {
      html.classList.add("light");
      toggleIcon.style.backgroundColor = "#d8dbe0"; 
      toggleIcon.style.boxShadow = "none";
      localStorage.setItem("theme", "light");
    } else {
      html.classList.remove("light");
      toggleIcon.style.backgroundColor = "#d8dbe0"; 
      toggleIcon.style.boxShadow = "inset 8px -3px 0px 0px #28292c";
      localStorage.setItem("theme", "dark");
    }
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    toggle.checked = true;
    updateTheme(true);
  } else {
    toggle.checked = false;
    updateTheme(false);
  }

  toggle.addEventListener("change", () => {
    updateTheme(toggle.checked);
  });
});