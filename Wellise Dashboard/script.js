function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";
    setTimeout(function () {
        notification.style.display = "none";
    }, 3000);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const darkModeEnabled = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", darkModeEnabled);
}

function setTextSize(size) {
    document.body.style.fontSize = size;
    localStorage.setItem("textSize", size);
    document.getElementById("textSizeOptions").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
    if (darkModeEnabled) {
        document.body.classList.add("dark-mode");
    }

    const savedTextSize = localStorage.getItem("textSize");
    if (savedTextSize) {
        document.body.style.fontSize = savedTextSize;
    }
});

function showTextSizeOptions() {
    document.getElementById("textSizeOptions").style.display = "block";
}

function saveJournal() {
    const journalBox = document.querySelector(".journal-box");
    const journalContent = journalBox.value.trim();

    if (journalContent === "") {
        alert("Please write something in your journal first!");
    } else {
        localStorage.setItem("savedJournal", journalContent);
        journalBox.value = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const savedJournal = localStorage.getItem("savedJournal");
    if (savedJournal) {
        document.querySelector(".journal-box").value = savedJournal;
    }
});

function showQuote() {
    const quoteBox = document.getElementById("quoteBox");
    quoteBox.style.display = "block";

    const quotes = [
        "Believe in yourself and all that you are.",
        "The only way to do great work is to love what you do.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "The future depends on what we do in the present."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteText").textContent = randomQuote;
}

function closeQuote() {
    document.getElementById("quoteBox").style.display = "none";
}
