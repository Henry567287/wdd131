const destinations = [
    {
        name: "Murchison Falls",
        location: "Northern Uganda",
        category: "Waterfalls",
        image: "images/murchison-falls.webp",
        description:
            "Murchison Falls is known for the powerful Nile River passing through a narrow gorge before plunging into the valley below."
    },

    {
        name: "Sipi Falls",
        location: "Eastern Uganda",
        category: "Waterfalls",
        image: "images/sipi-falls.webp",
        description:
            "Sipi Falls is known for its stunning cascade and the surrounding lush vegetation."
    },

    {
        name: "Bwindi Impenetrable Forest",
        location: "Southwestern Uganda",
        category: "Wildlife",
        image: "images/bwindi.webp",
        description:
            "Bwindi is a remarkable forest destination known for mountain gorilla trekking and rich biodiversity."
    },

    {
        name: "Lake Bunyonyi",
        location: "Southwestern Uganda",
        category: "Lakes",
        image: "images/lake-bunyonyi.webp",
        description:
            "Lake Bunyonyi is a beautiful highland lake surrounded by green hills and numerous small islands."
    },

    {
        name: "Lake Kyoga",
        location: "Central Uganda",
        category: "Lakes",
        image: "images/lake-kyoga.webp",
        description:
            "Lake Kyoga is a large freshwater lake known for its rich biodiversity and scenic beauty."
    },

    {
        name: "Lake Victoria",
        location: "Central Uganda",
        category: "Lakes",
        image: "images/lake-victoria.webp",
        description:
            "Lake Victoria is the largest lake in Africa and a vital source of the Nile River."
    },

    {
        name: "Queen Elizabeth National Park",
        location: "Western Uganda",
        category: "Wildlife",
        image: "images/queen-elizabeth.webp",
        description:
            "Queen Elizabeth National Park offers diverse wildlife, scenic landscapes, and experiences around the Kazinga Channel."
    },

    {
        name: "Rwenzori Mountains",
        location: "Western Uganda",
        category: "Mountains",
        image: "images/rwenzori.webp",
        description:
            "The Rwenzori Mountains provide dramatic mountain landscapes and challenging trekking experiences."
    },

    {
        name: "Kazinga Channel",
        location: "Western Uganda",
        category: "Wildlife",
        image: "images/kazinga-channel.webp",
        description:
            "The Kazinga Channel offers unique wildlife viewing opportunities and scenic boat tours."
    },      

    {
        name: "Mt. Elgon ",
        location: "Eastern Uganda",
        category: "Mountains",
        image: "images/mt-elgon.webp",
        description:
            "Mt. Elgon offers stunning mountain views and diverse hiking opportunities."
    }
];


function createDestinationCard(destination) {

    return `
        <article class="destination-card">

            <img
                src="${destination.image}"
                alt="${destination.name}"
                width="600"
                height="400"
                loading="lazy">

            <div class="destination-card-content">

                <span class="destination-category">
                    ${destination.category}
                </span>

                <h3>${destination.name}</h3>

                <p class="destination-location">
                    ${destination.location}
                </p>

                <p>${destination.description}</p>

            </div>

        </article>
    `;
}


function displayDestinations(destinationList) {

    const destinationContainer =
        document.querySelector("#destinationContainer");

    const featuredContainer =
        document.querySelector("#featuredContainer");

    const target =
        destinationContainer || featuredContainer;

    if (!target) {
        return;
    }

    if (destinationList.length === 0) {

        target.innerHTML = `
            <p class="no-results">
                No destinations found in this category.
                Please select another category.
            </p>
        `;

        return;
    }

    target.innerHTML = destinationList
        .map(destination => createDestinationCard(destination))
        .join("");
}


function filterDestinations(category) {

    let filteredDestinations;

    if (category === "All") {

        filteredDestinations = destinations;

    } else {

        filteredDestinations = destinations.filter(
            destination => destination.category === category
        );
    }

    displayDestinations(filteredDestinations);
}


function setupFilters() {

    const buttons =
        document.querySelectorAll("[data-category]");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedCategory = button.dataset.category;

            // Display destinations in the selected category.
            filterDestinations(selectedCategory);

            // Update the appearance and accessibility state.
            buttons.forEach(item => {

                const isSelected = item === button;

                item.classList.toggle("active", isSelected);
                item.classList.toggle("selected", isSelected);

                item.setAttribute(
                    "aria-pressed",
                    `${isSelected}`
                );

            });

        });

    });

}


function displayFeaturedDestinations() {

    const featuredDestinations = destinations.slice(0, 3);

    displayDestinations(featuredDestinations);

}


const destinationContainer =
    document.querySelector("#destinationContainer");

if (destinationContainer) {

    displayDestinations(destinations);

    setupFilters();

}

const featuredContainer =
    document.querySelector("#featuredContainer");

if (featuredContainer) {

    displayFeaturedDestinations();

}
