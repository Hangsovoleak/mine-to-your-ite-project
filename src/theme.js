function applyTheme(theme) {
    const app = document.getElementById("app");
    const icon = document.getElementById("themeIcon");
    const isLight = theme === "light";

    if (!app || !icon) return;

    app.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
    icon.src = isLight ? "../assets/moon.svg" : "../assets/sun.svg";
    icon.alt = isLight ? "Switch to dark mode" : "Switch to light mode";
}

function toggleMode() {
    const app = document.getElementById("app");
    if (!app) return;
    applyTheme(app.classList.contains("light") ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);
});

