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
  "all": [
    {
      id: 1,
      pictureUrl: "./ucfPics/myles1.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/myles2.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/myles3.jpg",
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
      pictureUrl: "./ucfPics/Multi18.jpg",
    },
    {
      id: 10,
      pictureUrl: "./ucfPics/Multi19.jpg",
    },
    {
      id: 11,
      pictureUrl: "./ucfPics/Multi22.jpg",
    },
    {
      id: 12,
      pictureUrl: "./ucfPics/Multi23.jpg",
    },
    {
      id: 13,
      pictureUrl: "./ucfPics/multi27.jpg",
    },
    {
      id: 14,
      pictureUrl: "./ucfPics/Multi28.jpg",
    },
    {
      id: 15,
      pictureUrl: "./ucfPics/Multi30.jpg",
    },
    {
      id: 16,
      pictureUrl: "./ucfPics/Myles1.gif",
    },
    {
      id: 17,
      pictureUrl: "./ucfPics/Chris1.jpg",
    },
    {
      id: 18,
      pictureUrl: "./ucfPics/Chris2.jpg",
    },
    {
      id: 19,
      pictureUrl: "./ucfPics/Chris3.jpg",
    },
    {
      id: 20,
      pictureUrl: "./ucfPics/Nick1.jpg",
    },
    {
      id: 21,
      pictureUrl: "./ucfPics/Nick2.jpg",
    },
    {
      id: 22,
      pictureUrl: "./ucfPics/Nick3.jpg",
    },
    {
      id: 23,
      pictureUrl: "./ucfPics/cristina1.JPG",
    },
    {
      id: 24,
      pictureUrl: "./ucfPics/cristina2.jpg",
    },
    {
      id: 25,
      pictureUrl: "./ucfPics/cristina3.webp",
    },
    {
      id: 26,
      pictureUrl: "./ucfPics/cristina4.jpg",
    },
    {
      id: 27,
      pictureUrl: "./ucfPics/cristina5.jpg",
    },
    {
      id: 28,
      pictureUrl: "./ucfPics/cristina6.jpg",
    },
    {
      id: 29,
      pictureUrl: "./ucfPics/cristina7.jpg",
    },
    {
      id: 30,
      pictureUrl: "./ucfPics/cristina8.jpg",
    },
    {
      id: 31,
      pictureUrl: "./ucfPics/cristina9.jpg",
    },
    {
      id: 32,
      pictureUrl: "./ucfPics/cristina10.jpeg",
    },
    {
      id: 33,
      pictureUrl: "./ucfPics/cristina11.jpg",
    },
    {
      id: 34,
      pictureUrl: "./ucfPics/cristina12.jpg",
    },
    {
      id: 35,
      pictureUrl: "./ucfPics/cristina13.jpg",
    },
    {
      id: 36,
      pictureUrl: "./ucfPics/cristina014.jpg",
    },
    {
      id: 37,
      pictureUrl: "./ucfPics/Multi33.gif",
    },
    {
      id: 38,
      pictureUrl: "./ucfPics/ross1.jpg",
    },
    {
      id: 39,
      pictureUrl: "./ucfPics/ross2.jpg",
    },
    {
      id: 40,
      pictureUrl: "./ucfPics/ross3.jpg",
    },
    {
      id: 41,
      pictureUrl: "./ucfPics/ross4.jpg",
    },
    {
      id: 42,
      pictureUrl: "./ucfPics/ross5.jpg",
    },
    {
      id: 43,
      pictureUrl: "./ucfPics/ross6.jpg",
    },
    {
      id: 44,
      pictureUrl: "./ucfPics/ross7.jpg",
    },
    {
      id: 45,
      pictureUrl: "./ucfPics/ross8.jpg",
    },
    {
      id: 46,
      pictureUrl: "./ucfPics/ross9.jpg",
    },
    {
      id: 47,
      pictureUrl: "./ucfPics/multi16.jpg",
    },
    {
    id: 48,
    pictureUrl: "./ucfPics/Multi12.jpg",
  },
  {
    id: 49,
    pictureUrl: "./ucfPics/multi5.jpeg",
  },
  {
    id: 50,
    pictureUrl: "./ucfPics/Areeb01.jpg",
  },
  {
    id: 51,
    pictureUrl: "./ucfPics/Areeb02.jpg",
  },
  {
    id: 52,
    pictureUrl: "./ucfPics/Areeb03.jpg",
  },
  {
    id: 53,
    pictureUrl: "./ucfPics/Areeb04.jpg",
  },
  {
    id: 54,
    pictureUrl: "./ucfPics/Areeb5.jpg",
  },
  {
    id: 55,
    pictureUrl: "./ucfPics/Areeb6.jpg",
  },
  {
    id: 56,
    pictureUrl: "./ucfPics/Areeb7.jpg",
  },
  {
    id: 57,
    pictureUrl: "./ucfPics/Areeb8.jpg",
  },
  {
    id: 58,
    pictureUrl: "./ucfPics/bolivar1.jpg",
  },
{
  id: 61,
  pictureUrl: "./ucfPics/Multi20.jpg",
},
{
id: 62,
pictureUrl: "./ucfPics/Multi21.jpg",
},
{
id: 63,
pictureUrl: "./ucfPics/Multi24.jpg",
},
{
id: 64,
pictureUrl: "./ucfPics/Multi25.jpg",
},
{
id: 65,
pictureUrl: "./ucfPics/Multi26.jpg",
},
{
id: 67,
pictureUrl: "./ucfPics/Multi29.jpg",
},
{
id: 69,
pictureUrl: "./ucfPics/Multi31.jpg",
},
{
  id: 70,
  pictureUrl: "./ucfPics/Bolivar1.gif",
},
{
  id: 71,
  pictureUrl: "./ucfPics/bolivar.jpg",
},
{
  id: 73,
  pictureUrl: "./ucfPics/bolivar2.jpg",
},
{
  id: 74,
  pictureUrl: "./ucfPics/bolivar3.jpg",
},
{
  id: 75,
  pictureUrl: "./ucfPics/Bolivar4.jpg",
},
{
  id: 76,
  pictureUrl: "./ucfPics/Bolivar5.jpg",
},
{
  id: 77,
  pictureUrl: "./ucfPics/Bolivar6.jpg",
},
{
  id: 78,
  pictureUrl: "./ucfPics/Multi1.gif",
},
{
  id: 91,
  pictureUrl: "./ucfPics/Multi32.jpg",
  },
  {
    id: 92,
    pictureUrl: "./ucfPics/fridjinah1.jpg",
  },
  {
    id: 93,
    pictureUrl: "./ucfPics/fridjinah2.jpg",
  },
  {
    id: 94,
    pictureUrl: "./ucfPics/fridjinah3.jpg",
  },
  {
    id: 95,
    pictureUrl: "./ucfPics/cristina4.jpg",
  },
  {
    id: 96,
    pictureUrl: "./ucfPics/cristina7.jpg",
  },
  {
    id: 97,
    pictureUrl: "./ucfPics/Multi2.jpg",
  },
  {
    id: 98,
    pictureUrl: "./ucfPics/multi3.jpg",
  },
  {
    id: 100,
    pictureUrl: "./ucfPics/multi6.jpg",
  },
  {
    id: 101,
    pictureUrl: "./ucfPics/multi7.jpg",
  },
  {
    id: 102,
    pictureUrl: "./ucfPics/multi013.jpg",
  },
  {
    id: 103,
    pictureUrl: "./ucfPics/multi14.jpg",
  },
  {
    id: 104,
    pictureUrl: "./ucfPics/multi15.webp",
  },
{
  id: 105,
  pictureUrl: "./ucfPics/myles2.jpg",
},
{
  id: 111,
  pictureUrl: "./ucfPics/multi8.jpg",
},
{
  id: 112,
  pictureUrl: "./ucfPics/multi9.jpg",
},
{
  id: 114,
  pictureUrl: "./ucfPics/Jorge7.gif",
},
{
  id: 115,
  pictureUrl: "./ucfPics/Jorge1.jpg",
},
{
  id: 116,
  pictureUrl: "./ucfPics/Jorge2.jpg",
},
{
  id: 117,
  pictureUrl: "./ucfPics/Jorge3.jpg",
},
{
  id: 118,
  pictureUrl: "./ucfPics/Jorge4.jpg",
},
{
  id: 119,
  pictureUrl: "./ucfPics/Jorge5.jpg",
},
{
  id: 120,
  pictureUrl: "./ucfPics/Jorge6.jpg",
},
  ],
  "myles": [
    {
      id: 1,
      pictureUrl: "./ucfPics/myles1.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/myles2.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/myles3.jpg",
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
      pictureUrl: "./ucfPics/Multi18.jpg",
    },
    {
      id: 10,
      pictureUrl: "./ucfPics/Multi19.jpg",
    },
    {
      id: 11,
      pictureUrl: "./ucfPics/Multi22.jpg",
    },
    {
      id: 12,
      pictureUrl: "./ucfPics/Multi23.jpg",
    },
    {
      id: 13,
      pictureUrl: "./ucfPics/multi27.jpg",
    },
    {
      id: 14,
      pictureUrl: "./ucfPics/Multi28.jpg",
    },
    {
      id: 15,
      pictureUrl: "./ucfPics/Multi30.jpg",
    },
    {
      id: 16,
      pictureUrl: "./ucfPics/Myles1.gif",
    }
  ],
  "chris": [
    {
      id: 1,
      pictureUrl: "./ucfPics/Chris1.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/Chris2.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/Chris3.jpg",
    },
  ],
  "nick": [
    {
      id: 1,
      pictureUrl: "./ucfPics/Nick1.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/Nick2.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/Nick3.jpg",
    },
  ],
  "cristina": [
    {
      id: 1,
      pictureUrl: "./ucfPics/cristina1.JPG",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/cristina2.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/cristina3.webp",
    },
    {
      id: 4,
      pictureUrl: "./ucfPics/cristina4.jpg",
    },
    {
      id: 5,
      pictureUrl: "./ucfPics/cristina5.jpg",
    },
    {
      id: 6,
      pictureUrl: "./ucfPics/cristina6.jpg",
    },
    {
      id: 7,
      pictureUrl: "./ucfPics/cristina7.jpg",
    },
    {
      id: 8,
      pictureUrl: "./ucfPics/cristina8.jpg",
    },
    {
      id: 9,
      pictureUrl: "./ucfPics/cristina9.jpg",
    },
    {
      id: 10,
      pictureUrl: "./ucfPics/cristina10.jpeg",
    },
    {
      id: 11,
      pictureUrl: "./ucfPics/cristina11.jpg",
    },
    {
      id: 12,
      pictureUrl: "./ucfPics/cristina12.jpg",
    },
    {
      id: 13,
      pictureUrl: "./ucfPics/cristina13.jpg",
    },
    {
      id: 14,
      pictureUrl: "./ucfPics/cristina014.jpg",
    },
    {
      id: 15,
      pictureUrl: "./ucfPics/Multi33.gif",
    },
    // Add more elephants as needed
  ],
  "ross": [
    {
      id: 1,
      pictureUrl: "./ucfPics/ross1.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/ross2.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/ross3.jpg",
    },
    {
      id: 4,
      pictureUrl: "./ucfPics/ross4.jpg",
    },
    {
      id: 5,
      pictureUrl: "./ucfPics/ross5.jpg",
    },
    {
      id: 6,
      pictureUrl: "./ucfPics/ross6.jpg",
    },
    {
      id: 7,
      pictureUrl: "./ucfPics/ross7.jpg",
    },
    {
      id: 8,
      pictureUrl: "./ucfPics/ross8.jpg",
    },
    {
      id: 9,
      pictureUrl: "./ucfPics/ross9.jpg",
    },
    {
      id: 10,
      pictureUrl: "./ucfPics/multi16.jpg",
    },
    {
    id: 11,
    pictureUrl: "./ucfPics/Multi12.jpg",
  },
  ],
  "areeb": [
    {
      id: 1,
      pictureUrl: "./ucfPics/Areeb01.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/Areeb02.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/Areeb03.jpg",
    },
    {
      id: 4,
      pictureUrl: "./ucfPics/Areeb04.jpg",
    },
    {
      id: 5,
      pictureUrl: "./ucfPics/Areeb5.jpg",
    },
    {
      id: 6,
      pictureUrl: "./ucfPics/Areeb6.jpg",
    },
    {
      id: 7,
      pictureUrl: "./ucfPics/Areeb7.jpg",
    },
    {
      id: 8,
      pictureUrl: "./ucfPics/Areeb8.jpg",
    },
    {
      id: 9,
      pictureUrl: "./ucfPics/bolivar1.jpg",
    },
    {
      id: 10,
      pictureUrl: "./ucfPics/multi5.jpeg",
    },
    {
    id: 11,
    pictureUrl: "./ucfPics/multi16.jpg",
  },
  {
    id: 13,
    pictureUrl: "./ucfPics/Multi20.jpg",
  },
  {
  id: 14,
  pictureUrl: "./ucfPics/Multi21.jpg",
},
{
  id: 15,
  pictureUrl: "./ucfPics/Multi22.jpg",
},
{
  id: 16,
  pictureUrl: "./ucfPics/Multi24.jpg",
},
{
  id: 17,
  pictureUrl: "./ucfPics/Multi25.jpg",
},
{
  id: 18,
  pictureUrl: "./ucfPics/Multi26.jpg",
},
{
  id: 19,
  pictureUrl: "./ucfPics/multi27.jpg",
},
{
  id: 20,
  pictureUrl: "./ucfPics/Multi29.jpg",
},
{
  id: 21,
  pictureUrl: "./ucfPics/Multi30.jpg",
},
{
  id: 22,
  pictureUrl: "./ucfPics/Multi31.jpg",
},
  ],
  "bolivar": [
  {
    id: 1,
    pictureUrl: "./ucfPics/Bolivar1.gif",
  },
  {
    id: 2,
    pictureUrl: "./ucfPics/bolivar.jpg",
  },
  {
    id: 3,
    pictureUrl: "./ucfPics/bolivar1.jpg",
  },
  {
    id: 4,
    pictureUrl: "./ucfPics/bolivar2.jpg",
  },
  {
    id: 5,
    pictureUrl: "./ucfPics/bolivar3.jpg",
  },
  {
    id: 6,
    pictureUrl: "./ucfPics/Bolivar4.jpg",
  },
  {
    id: 7,
    pictureUrl: "./ucfPics/Bolivar5.jpg",
  },
  {
    id: 8,
    pictureUrl: "./ucfPics/Bolivar6.jpg",
  },
  {
    id: 9,
    pictureUrl: "./ucfPics/Multi1.gif",
  },
  {
    id: 10,
    pictureUrl: "./ucfPics/Multi18.jpg",
  },
  {
  id: 11,
  pictureUrl: "./ucfPics/Multi19.jpg",
},
{
  id: 12,
  pictureUrl: "./ucfPics/Multi20.jpg",
},
{
  id: 13,
  pictureUrl: "./ucfPics/Multi21.jpg",
},
{
id: 14,
pictureUrl: "./ucfPics/Multi22.jpg",
},
{
id: 16,
pictureUrl: "./ucfPics/Multi24.jpg",
},
{
id: 17,
pictureUrl: "./ucfPics/Multi25.jpg",
},
{
id: 18,
pictureUrl: "./ucfPics/Multi26.jpg",
},
{
id: 19,
pictureUrl: "./ucfPics/multi27.jpg",
},
{
id: 20,
pictureUrl: "./ucfPics/Multi29.jpg",
},
{
id: 21,
pictureUrl: "./ucfPics/Multi30.jpg",
},
{
id: 22,
pictureUrl: "./ucfPics/Multi31.jpg",
},
{
  id: 23,
  pictureUrl: "./ucfPics/Multi28.jpg",
  },
  {
    id: 24,
    pictureUrl: "./ucfPics/Multi32.jpg",
    },
  ],
  "fridjinah": [
    {
      id: 1,
      pictureUrl: "./ucfPics/fridjinah1.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/fridjinah2.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/fridjinah3.jpg",
    },
    {
      id: 4,
      pictureUrl: "./ucfPics/cristina4.jpg",
    },
    {
      id: 5,
      pictureUrl: "./ucfPics/cristina7.jpg",
    },
    {
      id: 6,
      pictureUrl: "./ucfPics/Multi2.jpg",
    },
    {
      id: 7,
      pictureUrl: "./ucfPics/multi3.jpg",
    },
    {
      id: 5,
      pictureUrl: "./ucfPics/multi5.jpg",
    },
    {
      id: 6,
      pictureUrl: "./ucfPics/multi6.jpg",
    },
    {
      id: 7,
      pictureUrl: "./ucfPics/multi7.jpg",
    },
    {
      id: 8,
      pictureUrl: "./ucfPics/multi013.jpg",
    },
    {
      id: 9,
      pictureUrl: "./ucfPics/multi14.jpg",
    },
    {
      id: 10,
      pictureUrl: "./ucfPics/multi15.webp",
    },
  {
    id: 11,
    pictureUrl: "./ucfPics/myles2.jpg",
  },
  ],
  "christian": [
    {
      id: 1,
      pictureUrl: "./ucfPics/Multi2.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/multi3.jpg",
    },
    {
      id: 4,
      pictureUrl: "./ucfPics/multi5.jpeg",
    },
    {
      id: 5,
      pictureUrl: "./ucfPics/multi6.jpg",
    },
    {
      id: 6,
      pictureUrl: "./ucfPics/multi7.jpg",
    },
    {
      id: 7,
      pictureUrl: "./ucfPics/multi8.jpg",
    },
    {
      id: 8,
      pictureUrl: "./ucfPics/multi9.jpg",
    },
    {
      id: 10,
      pictureUrl: "./ucfPics/Multi33.gif",
    },
    {
      id: 11,
      pictureUrl: "./ucfPics/Jorge7.gif",
    },
  ],
  "jorge": [
    {
      id: 1,
      pictureUrl: "./ucfPics/Jorge1.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/Jorge2.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/Jorge3.jpg",
    },
    {
      id: 4,
      pictureUrl: "./ucfPics/Jorge4.jpg",
    },
    {
      id: 5,
      pictureUrl: "./ucfPics/Jorge5.jpg",
    },
    {
      id: 6,
      pictureUrl: "./ucfPics/Jorge6.jpg",
    },
    {
      id: 7,
      pictureUrl: "./ucfPics/multi5.jpeg",
    },
    {
      id: 8,
      pictureUrl: "./ucfPics/Jorge7.gif",
    },
  ],

  // Define arrays for other utm_term values
};


// Define the default array (for index.html)
const defaultElephantsArray = {
  "all": [
    {
      id: 1,
      pictureUrl: "./ucfPics/Multi23.jpg",
    },
    {
      id: 2,
      pictureUrl: "./ucfPics/Multi24.jpg",
    },
    {
      id: 3,
      pictureUrl: "./ucfPics/Multi25.jpg",
    },
  ]
};

// Function to get the array of elephants based on utm_term
function getElephantsArray(utmTerm) {
  return elephantsArraysByUtmTerm[utmTerm] || defaultElephantsArray;
}
// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the elephantsArray
shuffleArray(elephantsArray);
// Get the array of elephants based on utm_term
const elephantsArray = utmTerm ? getElephantsArray(utmTerm) : defaultElephantsArray;

// Generate HTML code for displaying images
let htmlCode = ``;
elephantsArray.forEach(elephant => {
  htmlCode += `
    <article>
      <div>
        <img src="${elephant.pictureUrl}">
      </div>
    </article>
  `;
});

// Display the images on the page
const elephantCards = document.querySelector(".all-elephant-cards");
elephantCards.innerHTML = htmlCode;