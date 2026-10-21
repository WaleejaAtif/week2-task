const greeting = document.getElementById("greeting");
const currentHour = new Date().getHours();

let message;

if (currentHour < 12) {
    message = "Good Morning";
} else if (currentHour < 17) {
    message = "Good Afternoon";
} else {
    message = "Good Evening";
}

if (greeting) {
    greeting.textContent = message;
}


/* ---------- Menu Button Functionality ---------- */

const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const dashboard = document.querySelector(".dashboard");

if (menuButton && sidebar && dashboard) {
    menuButton.addEventListener("click", function () {
        const isMobile = window.innerWidth <= 991.98;

        if (isMobile) {
            sidebar.classList.toggle("sidebar--open");
        } else {
            sidebar.classList.toggle("sidebar--collapsed");
            dashboard.classList.toggle("dashboard--sidebar-collapsed");
        }

        const isOpen = isMobile
            ? sidebar.classList.contains("sidebar--open")
            : !sidebar.classList.contains("sidebar--collapsed");

        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Close sidebar when clicking outside it on mobile
    document.addEventListener("click", function (event) {
        const isMobile = window.innerWidth <= 991.98;
        const isOpen = sidebar.classList.contains("sidebar--open");

        if (
            isMobile &&
            isOpen &&
            !sidebar.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            sidebar.classList.remove("sidebar--open");
            menuButton.setAttribute("aria-expanded", "false");
        }
    });

    // Close sidebar with Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            sidebar.classList.remove("sidebar--open");
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
}