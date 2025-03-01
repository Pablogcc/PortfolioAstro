document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Revisar el tema guardado
  if (localStorage.getItem("theme") === "light") {
    html.classList.remove("dark");
    themeToggle.textContent = "🌞";
  } else {
    html.classList.add("dark");
    themeToggle.textContent = "🌙";
  }

  // Alternar entre modos
  themeToggle.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌞";
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "🌙";
    }
  });
});
