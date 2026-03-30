// ── THEME ──
function applyTheme(theme) {
    const app = document.getElementById("app");
    const icon = document.getElementById("themeIcon");
    if (!app || !icon) return;

    const isLight = theme === "light";

    // Apply theme consistently to app
    app.classList.toggle("light", isLight);
    localStorage.setItem("theme", theme);

    // Update icon
    icon.src = isLight ? "../assets/moon.svg" : "../assets/sun.svg";
}

function toggleMode() {
    const app = document.getElementById("app");
    if (!app) return;

    // Toggle theme
    const isLight = !app.classList.contains("light");
    applyTheme(isLight ? "light" : "dark");
}

document.addEventListener("DOMContentLoaded", () => {
    // THEME INIT
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    // MOBILE MENU
    const toggleBtn = document.getElementById("menuToggle");
    const menu = document.getElementById("mobile-menu");

    if (toggleBtn && menu) {
        toggleBtn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            menu.classList.toggle("flex");
        });
    }

    // THEME TOGGLE BUTTON
    const themeButton = document.getElementById("themeToggle");
    if (themeButton) {
        themeButton.addEventListener("click", toggleMode);
    }
});