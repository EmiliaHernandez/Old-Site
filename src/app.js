// Function to parse URL parameters
function getUrlParams() {
  const searchParams = new URLSearchParams(window.location.search);
  const params = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  return params;
}

// Get URL parameters
const urlParams = getUrlParams();
const utmTerm = urlParams["utm_term"];

// Define arrays of elephants for different utm_term values
const elephantsArraysByUtmTerm = {
  // Define arrays for each utm_term value
  "value1": [
    {
      id: 1,
      name: "Elephant 1",
      IP: "Category 1",
      desc: "Description 1",
      pictureUrl: "URL 1",
      imdescAlt: "Alt Description 1"
    },
    // Add more elephants as needed
  ],
  "value2": [
    {
      id: 1,
      name: "Elephant 2",
      IP: "Category 2",
      desc: "Description 2",
      pictureUrl: "URL 2",
      imdescAlt: "Alt Description 2"
    },
    // Add more elephants as needed
  ],
  // Define arrays for other utm_term values
};

// Get the array of elephants based on utm_term
const elephantsArray = elephantsArraysByUtmTerm[utmTerm] || [];

let htmlCode = ``;

// Loop through the selected elephants array
elephantsArray.forEach(function(singleElephantObjects) {
  htmlCode +=
    `
    <article>
      <div>
      <img src="${singleElephantObjects.pictureUrl}" alt="${singleElephantObjects.imdescAlt}">
      </div>
      <div>
      <h3>${singleElephantObjects.name}</h3>
      <p>${singleElephantObjects.IP}</p>
      <p>${singleElephantObjects.desc}</p>
      </div>
    </article>
  `;
});

// Display the elephants on the page
const elephantCards = document.querySelector(".all-elephant-cards");
elephantCards.innerHTML = htmlCode;
