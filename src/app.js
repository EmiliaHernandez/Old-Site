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
  "myles": [
    {
      id: 1,
      pictureUrl: "ucfPics/Myles1.jpg",
    },
    // Add more elephants as needed
  ],
  "value2": [
    {
      id: 1,
      pictureUrl: "URL 2",
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
      <img src="${singleElephantObjects.pictureUrl}">
      </div>
    </article>
  `;
});

// Display the elephants on the page
const elephantCards = document.querySelector(".all-elephant-cards");
elephantCards.innerHTML = htmlCode;
