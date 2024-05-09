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
      pictureUrl: "./ucfPics/Myles1.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/Myles2.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/Myles3.jpg",
    },
    {
      id: 4,
      pictureUrl: "./ucfPics/Myles4.jpg",
    },
    {
      id: 5,
      pictureUrl: "./ucfPics/Myles5.jpg",
    },
    {
      id: 6,
      pictureUrl: "./ucfPics/Myles6.jpg",
    },
    {
      id: 7,
      pictureUrl: "./ucfPics/bolivar.jpg",
    },
    {
      id: 8,
      pictureUrl: "./ucfPics/bolivar3.jpg",
    },
    {
      id: 9,
      pictureUrl: "./ucfPics/multi18.jpg",
    },
    {
      id: 10,
      pictureUrl: "./ucfPics/multi19.jpg",
    },
    {
      id: 11,
      pictureUrl: "./ucfPics/multi22.jpg",
    },
    {
      id: 12,
      pictureUrl: "./ucfPics/multi23.jpg",
    },
    {
      id: 13,
      pictureUrl: "./ucfPics/multi27.jpg",
    },
    {
      id: 14,
      pictureUrl: "./ucfPics/multi28.jpg",
    },
    {
      id: 15,
      pictureUrl: "./ucfPics/multi30.jpg",
    }
  ],
  "cristina": [
    {
      id: 1,
      pictureUrl: "./ucfPics/Cristina1.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/Cristina2.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/Cristina3.jpg",
    },
    {
      id: 4,
      pictureUrl: "./ucfPics/Cristina4.jpg",
    },
    {
      id: 5,
      pictureUrl: "./ucfPics/Cristina5.jpg",
    },
    {
      id: 6,
      pictureUrl: "./ucfPics/Cristina6.jpg",
    },
    {
      id: 7,
      pictureUrl: "./ucfPics/Cristina7.jpg",
    },
    {
      id: 8,
      pictureUrl: "./ucfPics/Cristina8.jpg",
    },
    {
      id: 9,
      pictureUrl: "./ucfPics/Cristina9.jpg",
    },
    {
      id: 10,
      pictureUrl: "./ucfPics/Cristina10.jpg",
    },
    {
      id: 11,
      pictureUrl: "./ucfPics/Cristina11.jpg",
    },
    {
      id: 12,
      pictureUrl: "./ucfPics/Cristina12.jpg",
    },
    {
      id: 13,
      pictureUrl: "./ucfPics/Cristina13.jpg",
    },
    {
      id: 14,
      pictureUrl: "./ucfPics/Cristina14.jpg",
    },
    {
      id: 15,
      pictureUrl: "./ucfPics/Cristina15.jpg",
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
