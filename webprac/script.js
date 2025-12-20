const bttn = document.getElementById("bt");
const resetBtn = document.getElementById("reset");
const mainBox = document.getElementById("mainBox");

// PAGE LOAD PE THEME APPLY
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    mainBox.classList.add("dark");
    mainBox.classList.remove("light");
} else {
    mainBox.classList.add("light");
    mainBox.classList.remove("dark");
}

// DARK THEME
bttn.addEventListener("click", () => {
    mainBox.classList.add("dark");
    mainBox.classList.remove("light");
    localStorage.setItem("theme", "dark");
});

// LIGHT / RESET THEME
resetBtn.addEventListener("click", () => {
    mainBox.classList.add("light");
    mainBox.classList.remove("dark");
    localStorage.setItem("theme", "light");
});

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const value = searchInput.value.trim();

    if (value === "") {
        alert("Please enter a product name");
        return;
    }

    // result page pe bhejna
    window.location.href = "result.html?search=" + value;
});
