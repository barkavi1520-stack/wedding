
// ===================================
// PRI & BAARI - WEDDING INVITATION
// ===================================

// CHANGE YOUR WEDDING DATE HERE
// Format: Year, Month (0 = January), Day, Hour, Minute

const weddingDate = new Date(2026, 9, 27, 17, 0, 0);


// COUNTDOWN TIMER

function updateCountdown() {

    const now = new Date();

    const difference = weddingDate - now;

    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("countdownMessage").textContent =
            "Today is the special day! Pri & Baari are getting married! ♥";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);


// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    menuBtn.textContent =
        navMenu.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// RSVP FORM

const rsvpForm = document.getElementById("rsvpForm");

rsvpForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("guestName").value.trim();

    const count = document.getElementById("guestCount").value;

    const attendance = document.getElementById("attendance").value;

    const message = document.getElementById("guestMessage").value.trim();

    if (!name || !count || !attendance) {

        alert("Please complete all required fields.");

        return;
    }

    const whatsappNumber = "94774430880"; 
    // CHANGE THIS TO YOUR WHATSAPP NUMBER
    // Include country code without + sign.

    const whatsappMessage =
        `Hello Pri & Baari! ❤️\n\n` +
        `Name: ${name}\n` +
        `Number of guests: ${count}\n` +
        `Attendance: ${attendance}\n` +
        `Message: ${message || "No additional message"}\n\n` +
        `Best wishes for your wedding!`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    document.getElementById("rsvpMessage").textContent =
        "Opening WhatsApp to send your RSVP... ❤️";

    window.open(whatsappURL, "_blank");

});


// BACKGROUND MUSIC

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function() {

    if (music.paused) {

        music.play()
            .then(() => {
                musicBtn.textContent = "Ⅱ";
            })
            .catch(() => {
                alert("Please add your music.mp3 file to the project folder.");
            });

    } else {

        music.pause();
        musicBtn.textContent = "♪";

    }

});


// GALLERY IMAGE CLICK

document.querySelectorAll(".gallery-container img").forEach(function(image) {

    image.addEventListener("click", function() {

        window.open(image.src, "_blank");

    });

});


// WEDDING DATE DISPLAY

const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

document.getElementById("heroDate").textContent =
    weddingDate.toLocaleDateString("en-GB", dateOptions);
