// script.js

// Category info text
const categories = {
  communication: {
    title: "Communication Satellites",
    description:
      "Support telecommunication, TV broadcasting, satellite news gathering, societal applications, weather forecasting, disaster warning and Search and Rescue services.",
    mission: "Example launch: PSLV-C51 (AMAZONIA-1) and multiple GSAT/INSAT missions.",
  },
  earthObservation: {
    title: "Earth Observation Satellites",
    description:
      "Thematic satellites for land and water resources, cartography, and ocean & atmosphere monitoring—forming one of the largest civilian remote sensing constellations.",
    mission: "Example launch: PSLV-C50 (CMS-01 mission).",
  },
  science: {
    title: "Scientific Spacecraft",
    description:
      "Spacecraft for research in astronomy, astrophysics, planetary and Earth sciences, atmospheric sciences and theoretical physics.",
    mission: "Examples: Astrosat, XPoSat, various PSLV science missions.",
  },
  navigation: {
    title: "Navigation Satellites (NavIC)",
    description:
      "Provide regional navigation services for civil aviation and users needing precise positioning, navigation and timing via India’s independent NavIC system.",
    mission: "Example: IRNSS-1 series launches building the NavIC constellation.",
  },
  experimental: {
    title: "Experimental Satellites",
    description:
      "Small satellites testing new technologies in remote sensing, atmospheric studies, payloads, orbit control and recovery technologies.",
    mission: "Example: various PSLV missions carrying experimental payloads.",
  },
  small: {
    title: "Small Satellites",
    description:
      "Sub-500 kg class satellites used as agile platforms for quick-turnaround Earth imaging and science missions.",
    mission: "Example: many small satellites share rides on PSLV and SSLV launches.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const satellites = document.querySelectorAll(".satellite");
  const infoTitle = document.getElementById("info-title");
  const infoText = document.getElementById("info-text");
  const infoMission = document.getElementById("info-mission");

  function updateInfo(categoryKey) {
    const cat = categories[categoryKey];
    if (!cat || !infoTitle) return; // mission/category pages also load this script
    infoTitle.textContent = cat.title;
    infoText.textContent = cat.description;
    infoMission.textContent = cat.mission;
  }

  satellites.forEach((sat) => {
    const key = sat.dataset.category;

    sat.addEventListener("mouseenter", () => {
      updateInfo(key);
    });

    sat.addEventListener("click", () => {
  updateInfo(key);

  // navigate to the correct category page
  const pageMap = {
    communication: "communication.html",
    earthObservation: "earth-observation.html",
    science: "scientific.html",
    navigation: "navigation.html",
    experimental: "experimental.html",
    small: "small-satellites.html",
  };

  window.location.href = `categories/${pageMap[key]}`;
});

  });
});
