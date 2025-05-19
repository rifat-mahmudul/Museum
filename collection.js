// Sample data for artifacts
const artifactsData = [
  {
    id: 1,
    image: "/assets/card1.png",
    title: "Cirkulær løretid med historisk perspektiv",
    description:
      "Den fysiske håndværk er et håndgribeligt museum, som bringer historien og håndværket til at vække vores fælles minder.",
  },
  {
    id: 2,
    image: "/assets/card2.png",
    title: "Moderne museum med musikken i centrum",
    description:
      "Carl Nielsen Museet er en kontrastfyldt oplevelse, hvor du møder datidens komponist, der både er en stærk temperamentsfyldt, symfonisk og fine følelsige sange møder af den danske kultur og folkesjæl.",
  },
  {
    id: 3,
    image: "/assets/card3.png",
    title: "Tid er mere end et museum",
    description:
      "Tid er Odenses bymuseum centralt i Odense. Her møder du fortiden i nutiden gennem udstillinger og events om Odense og Fyn lige fra de ældste tider og op til i dag.",
  },
  {
    id: 4,
    image: "/assets/card4.png",
    title: "Træd ind i eventyrret",
    description:
      "H.C. Andersens Hus byder på en utrolig rejse gennem forfatterens kreative univers, og i museet møder du hans elskede fortællinger.",
  },
  {
    id: 5,
    image: "/assets/card5.png",
    title: "Cirkulær løretid med historisk perspektiv",
    description:
      "Den fysiske håndværk er et håndgribeligt museum, som bringer historien og håndværket til at vække vores fælles minder.",
  },
  {
    id: 6,
    image: "/assets/card6.png",
    title: "Moderne museum med musikken i centrum",
    description:
      "Carl Nielsen Museet er en kontrastfyldt oplevelse, hvor du møder datidens komponist, der både er en stærk temperamentsfyldt, symfonisk og fine følelsige sange møder af den danske kultur og folkesjæl.",
  },
  {
    id: 7,
    image: "/assets/card7.png",
    title: "Tid er mere end et museum",
    description:
      "Tid er Odenses bymuseum centralt i Odense. Her møder du fortiden i nutiden gennem udstillinger og events om Odense og Fyn lige fra de ældste tider og op til i dag.",
  },
  {
    id: 8,
    image: "/assets/card8.png",
    title: "Træd ind i eventyrret",
    description:
      "H.C. Andersens Hus byder på en utrolig rejse gennem forfatterens kreative univers, og i museet møder du hans elskede fortællinger.",
  },
];

// Function to create a single artifact card
function createArtifactCard(artifact) {
  const card = document.createElement("div");
  card.className = "artifact-card";

  card.innerHTML = `
        <img src="${artifact.image}" alt="${artifact.title}" class="artifact-image">
        <div class="artifact-content">
            <h2 class="artifact-title">${artifact.title}</h2>
            <p class="artifact-description">${artifact.description}</p>
        </div>
    `;

  return card;
}

// Function to render all artifacts
function renderArtifacts() {
  const container = document.getElementById("artifacts-container");

  // Clear container
  container.innerHTML = "";

  // Create and append each artifact card
  artifactsData.forEach((artifact) => {
    const card = createArtifactCard(artifact);
    container.appendChild(card);
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderArtifacts();
});
