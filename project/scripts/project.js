const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

function toggleMenu() {
    if (!menuButton || !mainNav) {
        return;
    }

    const isOpen = mainNav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
}

if (menuButton && mainNav) {
    menuButton.addEventListener("click", toggleMenu);
}


function updateFooter() {
    const yearElement = document.querySelector("#currentyear");
    const modifiedElement = document.querySelector("#lastModified");

    // Display the current year
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Display the page's last modification date
    if (modifiedElement) {
        modifiedElement.textContent =
            `Last Modification: ${document.lastModified}`;
    }
}


function updateVisitCount() {
    const visitMessage = document.querySelector("#visitMessage");

    // If the visitMessage element is not found, exit the function
    if (!visitMessage) {
        return;
    }

    try {
        let visits = Number(
            localStorage.getItem("exploreUgandaVisits")
        ) || 0;

        visits++;

        localStorage.setItem("exploreUgandaVisits", visits);

        if (visits === 1) {
            visitMessage.textContent =
                "Welcome! This is your first visit to Explore Uganda.";
        } else {
            visitMessage.textContent =
                `Welcome back! You have visited Explore Uganda ${visits} times.`;
        }
    } catch (error) {
        // Keep the page usable if browser storage is unavailable
        visitMessage.textContent =
            "Welcome to Explore Uganda! Discover your next adventure.";
    }
}


updateFooter();
updateVisitCount();
