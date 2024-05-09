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
        pictureUrl: "./ucfPics/Multi27.jpg",
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
        pictureUrl: "./ucfPics/cristina1.jpg",
      },
      {
        id: 2,
        pictureUrl: "./ucfPics/cristina2.jpg",
      },
      {
        id: 3,
        pictureUrl: "./ucfPics/cristina3.jpg",
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
        pictureUrl: "./ucfPics/cristina10.jpg",
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
        pictureUrl: "./ucfPics/cristina14.jpg",
      },
      {
        id: 15,
        pictureUrl: "./ucfPics/cristina15.jpg",
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
    {
      id: 12,
      pictureUrl: "./ucfPics/multi5.jpeg",
    },
    ],
    "areeb": [
      {
        id: 1,
        pictureUrl: "./ucfPics/Areeb1.jpg",
      },
      {
        id: 2,
        pictureUrl: "./ucfPics/Areeb2.jpg",
      },
      {
        id: 3,
        pictureUrl: "./ucfPics/Areeb3.jpg",
      },
      {
        id: 4,
        pictureUrl: "./ucfPics/Areeb4.jpg",
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
        pictureUrl: "./ucfPics/multi5.jpg",
      },
      {
      id: 11,
      pictureUrl: "./ucfPics/multi16.jpg",
    },
    {
      id: 12,
      pictureUrl: "./ucfPics/multi7.jpeg",
    },
    {
      id: 13,
      pictureUrl: "./ucfPics/Mult20.jpg",
    },
    {
    id: 14,
    pictureUrl: "./ucfPics/Multi21.jpg",
  },
  {
    id: 15,
    pictureUrl: "./ucfPics/Multi22.jpeg",
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
    pictureUrl: "./ucfPics/Multi26.jpeg",
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
    pictureUrl: "./ucfPics/Multi30.jpeg",
  },
  {
    id: 22,
    pictureUrl: "./ucfPics/Multi31.jpg",
  },
    ],
    "bolivar": [
    {
      id: 1,
      pictureUrl: "./ucfPics/Bolivar.gif",
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
      pictureUrl: "./ucfPics/bolivar4.jpg",
    },
    {
      id: 7,
      pictureUrl: "./ucfPics/bolivar5.jpg",
    },
    {
      id: 8,
      pictureUrl: "./ucfPics/bolivar6.jpg",
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
    pictureUrl: "./ucfPics/Multi20.jpeg",
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
  id: 15,
  pictureUrl: "./ucfPics/Multi23.jpeg",
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
  pictureUrl: "./ucfPics/Multi26.jpeg",
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
  pictureUrl: "./ucfPics/Multi30.jpeg",
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
        pictureUrl: "./ucfPics/multi13.jpg",
      },
      {
        id: 9,
        pictureUrl: "./ucfPics/multi14.jpg",
      },
      {
        id: 10,
        pictureUrl: "./ucfPics/multi15.jpg",
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
        id: 3,
        pictureUrl: "./ucfPics/Multi4.jpg",
      },
      {
        id: 4,
        pictureUrl: "./ucfPics/multi5.jpg",
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
        id: 5,
        pictureUrl: "./ucfPics/multi9.jpg",
      },
      {
        id: 6,
        pictureUrl: "./ucfPics/multi10.jpg",
      },
    ],
  
    // Define arrays for other utm_term values
  };
  
  // Get all unique picture URLs
  const uniquePictureUrls = new Set();
  Object.values(elephantsArraysByUtmTerm).forEach(array => {
    array.forEach(elephant => {
      uniquePictureUrls.add(elephant.pictureUrl);
    });
  });
  
  let htmlCode = ``;
  
  // Loop through unique picture URLs and generate HTML
  uniquePictureUrls.forEach(pictureUrl => {
    htmlCode += `
      <article>
        <div>
          <img src="${pictureUrl}">
        </div>
      </article>
    `;
  });
  
  // Display the elephants on the page
  const elephantCards = document.querySelector(".all-elephant-cards");
  elephantCards.innerHTML = htmlCode;