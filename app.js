// ========================================
// COPY GIT COMMAND
// ========================================

function copyCommand(command) {

    navigator.clipboard.writeText(command)
        .then(() => {

            alert("Command copied:\n\n" + command);

        })
        .catch(() => {

            alert("Unable to copy command.");

        });
}


// ========================================
// DARK / LIGHT MODE
// ========================================

const themeBtn = document.getElementById("themeBtn");

let darkMode = true;

themeBtn.addEventListener("click", function () {

    if (darkMode) {

        document.documentElement.style.setProperty(
            "--bg",
            "#f8fafc"
        );

        document.documentElement.style.setProperty(
            "--sidebar",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--border",
            "#e2e8f0"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#111827"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#64748b"
        );

        themeBtn.textContent = "☀️";

        darkMode = false;

    } else {

        document.documentElement.style.setProperty(
            "--bg",
            "#09090b"
        );

        document.documentElement.style.setProperty(
            "--sidebar",
            "#0d0d10"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#111114"
        );

        document.documentElement.style.setProperty(
            "--border",
            "#25252b"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#f4f4f5"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#a1a1aa"
        );

        themeBtn.textContent = "🌙";

        darkMode = true;
    }

});


// ========================================
// SEARCH GIT COMMANDS
// ========================================

const searchInput =
    document.getElementById("searchInput");

const commandCards =
    document.querySelectorAll(".command-card");


searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value.toLowerCase().trim();


    commandCards.forEach(function (card) {

        const cardText =
            card.innerText.toLowerCase();


        if (cardText.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// ========================================
// ACTIVE SIDEBAR LINK
// ========================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function () {

    let currentSection = "home";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});