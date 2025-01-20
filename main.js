// nav 

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


// Modal 

const openModal = document.querySelectorAll(".open-button");
const modals = document.querySelectorAll(".modal")

openModal.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-target");
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal();
            document.body.classList.add("no-scroll")
        }
    });
});

// close modal

document.querySelectorAll(".close-button").forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest("dialog");
        if (modal) {
            modal.close();
            document.body.classList.remove("no-scroll");
        }
    });
});

// Close modal when clicking on the backdrop
modals.forEach(modal => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
            document.body.classList.remove("no-scroll");
        }
    });
});


// Form validation

// Phone real-time formatting
document.getElementById('phone').addEventListener('input', function (event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove all non-digit characters
    
    if (value.length > 10) value = value.slice(0, 10); // Limit to 10 digits
    
    let formattedValue = value;
    if (value.length > 6) {
      formattedValue = `(${value.slice(0, 3)}) - ${value.slice(3, 6)} - ${value.slice(6)}`;
    } else if (value.length > 3) {
      formattedValue = `(${value.slice(0, 3)}) - ${value.slice(3)}`;
    } else if (value.length > 0) {
      formattedValue = `(${value}`;
    }
    
    input.value = formattedValue;
  });


// Phone validation
document.getElementById('form').addEventListener('submit', function (event) {
    const phoneInput = document.getElementById('phone');
    if (!phoneInput.checkValidity()) {
      event.preventDefault(); // Prevent form submission
      alert('Please enter a valid phone number in the format (555) - 555 - 5555.');
    }
  });