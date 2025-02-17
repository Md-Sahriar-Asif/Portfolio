document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("aboutModal");
    var openModalBtn = document.getElementById("open-modal");
    var closeModalBtn = document.querySelector(".close");

    openModalBtn.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "flex"; // Show modal
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal
    });

    // Close modal if user clicks outside the content box
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

/*Responsive design */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// home section

const typed = new Typed('.multiple-text', {
    strings: ['Third Year CSE Student', 'Software Engineering Enthusiast', 'Problem Solver'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1200,
    loop: true,
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});


