


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    function toggleMenu() {
        const rect = hamburger.getBoundingClientRect();
        const offset = rect.bottom + window.scrollY;

        navMenu.style.top = `${offset}px`; // position below hamburger
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    }

    hamburger.addEventListener("click", toggleMenu);

    document.querySelectorAll(".nav-link").forEach(n =>
        n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        })
    );
});



const track = document.getElementById("scrollTrack");
const box = document.querySelector(".scroll-box");

track.innerHTML += track.innerHTML;

let position = 0;
let currentSpeed = 0.5;         // Actual speed used for scrolling
const targetSpeed = 0.5;        // Normal full speed
const slowDownStep = 0.1;      // How fast it eases (lower = smoother)
const totalWidth = track.scrollWidth / 2;
let paused = false;

// Scroll function
function scroll() {
  // Smooth speed change
  if (paused && currentSpeed > 0) {
    currentSpeed = Math.max(0, currentSpeed - slowDownStep);
  } else if (!paused && currentSpeed < targetSpeed) {
    currentSpeed = Math.min(targetSpeed, currentSpeed + slowDownStep);
  }

  position -= currentSpeed;

  if (Math.abs(position) >= totalWidth) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;

  requestAnimationFrame(scroll);
}

// Hover events
box.addEventListener("mouseenter", () => paused = true);
box.addEventListener("mouseleave", () => paused = false);

scroll();

