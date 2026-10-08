/* =========================================================
   MAXLOT AGENCY
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
       ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("active");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Close menu after clicking a link */

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================
       CLOSE MENU WHEN CLICKING OUTSIDE
       ========================= */

    document.addEventListener("click", function (event) {

        if (!menuToggle || !mainNav) {
            return;
        }

        const clickedInsideMenu =
            mainNav.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedMenuButton &&
            mainNav.classList.contains("active")
        ) {

            mainNav.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* =========================
       ESC KEY CLOSES MOBILE MENU
       ========================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        }

    });


    /* =========================
       HEADER SCROLL EFFECT
       ========================= */

    const header = document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 30) {

                header.style.boxShadow =
                    "0 8px 30px rgba(20, 33, 61, 0.06)";

            } else {

                header.style.boxShadow = "none";

            }

        });

    }


    /* =========================
       CURRENT YEAR
       ========================= */

    const yearElement =
        document.querySelector(".footer-bottom p");

    if (yearElement) {

        const currentYear =
            new Date().getFullYear();

        yearElement.innerHTML =
            `© ${currentYear} Maxlot Agency. All rights reserved.`;

    }


    /* =========================
       PREVENT EMPTY # LINKS
       ========================= */

    document.querySelectorAll('a[href="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

        });

    });

});
