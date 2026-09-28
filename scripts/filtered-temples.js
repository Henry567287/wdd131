const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
    },

    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 42300,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/800x500/laie-temple-772761-wallpaper.jpg"
    },

    {
        templeName: "Provo City Center Utah",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/800x500/Provo-City-Center-Temple03.jpg"
    }
];


const templeContainer =
    document.querySelector("#temple-container");


function displayTemples(templeList) {

    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {

        const card =
            document.createElement("figure");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>

            <p>
                <span>Location:</span>
                ${temple.location}
            </p>

            <p>
                <span>Dedicated:</span>
                ${temple.dedicated}
            </p>

            <p>
                <span>Size:</span>
                ${temple.area.toLocaleString()} sq ft
            </p>

            <img
                src="${temple.imageUrl}"
                alt="${temple.templeName}"
                loading="lazy"
            >
        `;

        templeContainer.appendChild(card);
    });
}


const heading =
    document.querySelector("main h1");


document.querySelector("#home")
    .addEventListener("click", () => {

        displayTemples(temples);

        heading.textContent = "Home";
    });


document.querySelector("#old")
    .addEventListener("click", () => {

        const oldTemples =
            temples.filter((temple) => {

                const year =
                    Number(
                        temple.dedicated.substring(0, 4)
                    );

                return year < 1900;
            });

        displayTemples(oldTemples);

        heading.textContent = "Old Temples";
    });


document.querySelector("#new")
    .addEventListener("click", () => {

        const newTemples =
            temples.filter((temple) => {

                const year =
                    Number(
                        temple.dedicated.substring(0, 4)
                    );

                return year > 2000;
            });

        displayTemples(newTemples);

        heading.textContent = "New Temples";
    });


document.querySelector("#large")
    .addEventListener("click", () => {

        const largeTemples =
            temples.filter((temple) => {

                return temple.area > 90000;
            });

        displayTemples(largeTemples);

        heading.textContent = "Large Temples";
    });


document.querySelector("#small")
    .addEventListener("click", () => {

        const smallTemples =
            temples.filter((temple) => {

                return temple.area < 10000;
            });

        displayTemples(smallTemples);

        heading.textContent = "Small Temples";
    });


const currentYear =
    new Date().getFullYear();

document.querySelector("#currentyear").textContent =
    currentYear;


document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


displayTemples(temples);