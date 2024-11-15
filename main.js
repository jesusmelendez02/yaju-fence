// nav 

// const nav = document.querySelector(".primary-navigation");
// const navList = document.querySelectorAll("primary-navigation a");
// const navToggle = document.querySelector(".mobile-nav-toggle");

// navToggle.addEventListener("click", () => {
//     const visibility = nav.getAttribute("data-visible");
//     if (visibility === "false") {
//         nav.setAttribute("data-visible", true);
//         navToggle.setAttribute("aria-expanded", true);
//         document.body.classList.toggle("no-scroll");
//     } else {
//             nav.setAttribute("data-visible", false);
//             navToggle.setAttribute("aria-expanded", false);
//             document.body.classList.remove("no-scroll");
//         }
        
//     });

//     navList.forEach(link => {
//         link.addEventListener("click", () => {
//             nav.setAttribute("data-visible", "false");
//         navToggle.setAttribute("aria-expanded", "false");
//         document.body.classList.remove("no-scroll");
//         });
//     });


const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelectorAll(".primary-navigation a"); // All links in the nav

navToggle.addEventListener("click", () => {
    const isVisible = nav.getAttribute("data-visible") === "true";

    // Toggle menu visibility and aria-expanded attribute based on current state
    nav.setAttribute("data-visible", !isVisible);
    navToggle.setAttribute("aria-expanded", !isVisible);

    // Add or remove no-scroll class on body to prevent/allow scrolling based on visibility
    document.body.classList.toggle("no-scroll", !isVisible);
});

// Close menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll"); // Allow scrolling again
    });
});


// modal 
// const modal = document.querySelector("#modal");
// const openModal = document.querySelector(".open-button");
// const closeModal = document.querySelector(".close-button");

// openModal.addEventListener("click", () => {
//   modal.showModal();
// });

// closeModal.addEventListener("click", () => {
//   modal.close();
// });

const openModal = document.querySelectorAll(".open-button");

openModal.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-target");
        const modal = document.getElementById(modalId);
        if(modal) {
            modal.showModal();
        }
    });
});

// close modal

document.querySelectorAll(".close-button").forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest("dialog");
        if(modal) {
            modal.close();
        }
    });
});