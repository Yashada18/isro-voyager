// Generate pixelated stars
function generateStars() {
  const starsContainer = document.getElementById("stars-container");
  const starCount = 80;
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "stars";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.opacity = Math.random() * 0.6 + 0.4;
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
    starsContainer.appendChild(star);
  }
}

// Twinkle animation for stars
const style = document.createElement("style");
style.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(style);

// Initialize stars on page load
generateStars();

// Click actions for satellites
document.querySelectorAll(".satellite").forEach(sat => {
  sat.addEventListener("click", () => {
    const label = sat.querySelector("p").textContent.trim();

    switch(label) {
      case "Communication":
        window.location.href = "categories/communication.html";
        break;
      case "Earth Observation":
        window.location.href = "categories/earth-observation.html";
        break;
      case "Scientific":
        window.location.href = "categories/scientific.html";
        break;
      case "Navigation":
        window.location.href = "categories/navigation.html";
        break;
      case "Experimental":
        window.location.href = "categories/experimental.html";
        break;
      case "Small Satellites":
        window.location.href = "categories/small-satellites.html";
        break;
    }
  });
});
