const destinations = [
  {
    name: "Murchison Falls",
    location: "Northern Uganda",
    category: "Waterfalls",
    image: "images/murchison-falls.webp",
    description: "The Nile River squeezes through a narrow gorge before plunging into the valley below."
  },
  {
    name: "Sipi Falls",
    location: "Eastern Uganda",
    category: "Waterfalls",
    image: "images/sipi-falls.webp",
    description: "A series of scenic waterfalls surrounded by green slopes near Mount Elgon."
  },
  {
    name: "Bwindi Impenetrable Forest",
    location: "Southwestern Uganda",
    category: "Wildlife",
    image: "images/bwindi.webp",
    description: "A biodiverse forest known for mountain gorilla trekking and guided nature experiences."
  },
  {
    name: "Lake Bunyonyi",
    location: "Southwestern Uganda",
    category: "Lakes",
    image: "images/lake-bunyonyi.webp",
    description: "A highland lake surrounded by green hills and small islands."
  },
  {
    name: "Lake Kyoga",
    location: "Central Uganda",
    category: "Lakes",
    image: "images/lake-kyoga.webp",
    description: "A broad freshwater lake system in the heart of Uganda."
  },
  {
    name: "Lake Victoria",
    location: "Southern Uganda",
    category: "Lakes",
    image: "images/lake-victoria.webp",
    description: "Africa's largest lake borders Uganda and supports communities, wildlife, and transport."
  },
  {
    name: "Queen Elizabeth National Park",
    location: "Western Uganda",
    category: "Wildlife",
    image: "images/queen-elizabeth.webp",
    description: "A varied landscape of savannah, wetlands, crater lakes, and wildlife."
  },
  {
    name: "Rwenzori Mountains",
    location: "Western Uganda",
    category: "Mountains",
    image: "images/rwenzori.webp",
    description: "A dramatic mountain range with high peaks, unusual plants, and trekking routes."
  },
  {
    name: "Kazinga Channel",
    location: "Western Uganda",
    category: "Wildlife",
    image: "images/kazinga-channel.webp",
    description: "A waterway in Queen Elizabeth National Park known for boat trips and wildlife viewing."
  },
  {
    name: "Mount Elgon",
    location: "Eastern Uganda",
    category: "Mountains",
    image: "images/mt-elgon.webp",
    description: "An ancient volcanic mountain with hiking trails, caves, forests, and waterfalls."
  }
];

function createDestinationCard(destination) {
  return `
    <article class="destination-card">
      <img src="${destination.image}" alt="${destination.name}" width="600" height="400" loading="lazy">
      <div class="destination-card-content">
        <span class="destination-category">${destination.category}</span>
        <h3>${destination.name}</h3>
        <p class="destination-location">${destination.location}</p>
        <p>${destination.description}</p>
      </div>
    </article>
  `;
}

function displayDestinations(destinationList, target) {
  if (!target) return;

  if (destinationList.length === 0) {
    target.innerHTML = `<p class="no-results">No destinations found in this category. Please choose another category.</p>`;
    return;
  }

  target.innerHTML = destinationList.map((destination) => createDestinationCard(destination)).join("");
}

function filterDestinations(category) {
  let filteredDestinations;

  if (category === "All") {
    filteredDestinations = destinations;
  } else {
    filteredDestinations = destinations.filter((destination) => destination.category === category);
  }

  const destinationContainer = document.querySelector("#destinationContainer");
  displayDestinations(filteredDestinations, destinationContainer);

  const resultsMessage = document.querySelector("#resultsMessage");
  if (resultsMessage) {
    resultsMessage.textContent = `${filteredDestinations.length} destination${filteredDestinations.length === 1 ? "" : "s"} shown.`;
  }
}

function setupFilters() {
  const buttons = document.querySelectorAll("[data-category]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.category;
      filterDestinations(selectedCategory);

      buttons.forEach((item) => {
        const isSelected = item === button;
        item.classList.toggle("active", isSelected);
        item.setAttribute("aria-pressed", String(isSelected));
      });
    });
  });
}

function displayFeaturedDestinations() {
  const featuredContainer = document.querySelector("#featuredContainer");
  displayDestinations(destinations.slice(0, 3), featuredContainer);
}

const destinationContainer = document.querySelector("#destinationContainer");
if (destinationContainer) {
  displayDestinations(destinations, destinationContainer);
  setupFilters();
  const resultsMessage = document.querySelector("#resultsMessage");
  if (resultsMessage) resultsMessage.textContent = `${destinations.length} destinations shown.`;
}

if (document.querySelector("#featuredContainer")) {
  displayFeaturedDestinations();
}
