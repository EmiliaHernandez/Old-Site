// we will create an array of JS objects with the properties of our elephants

// we use const here cause the variable doesn't change after

// we have 4 items inside the array, each item is an object with 6 properties. An id, name, IP, desc, imdesc and alt description.

const elephantsArray = [
  {
    id: 1,
    name: "Byleth(Both Versions)",
    IP: "Fire Emblem",
    desc: "They are both fine",
    pictureUrl:
      "https://pbs.twimg.com/media/EBoxPMzXUAA3URH.png",
    imdescAlt: "They are both fine"
  },
  {
    id: 2,
    name: "C3PO",
    IP: "Star Wars",
    desc: "gay is okay",
    pictureUrl:
      "https://preview.free3d.com/img/2015/03/2408157595903722762/meftys0n.jpg",
    imdescAlt: "dark elephant"
  },
  {
    id: 3,
    name: "Cana",
    IP: "Fairy Tail",
    desc: "(.)(.)🍷",
    pictureUrl:
      "https://64.media.tumblr.com/05c0d65f0ca79483eeea2d6e2eeb9c6e/tumblr_inline_o2wgyqHcRz1t4w1ob_400.png",
    imdescAlt: "papa elephant"
  },
  {
    id: 4,
    name: "Cassius 'Cash' Green",
    IP: "Sorry to Both You",
    desc: "wanted to name the cat after him if boy",
    pictureUrl:
      "https://goggler.my/wp-content/uploads/2020/03/sorry-to-bother-you-5e16f95e951ce.jpg",
    imdescAlt: "playful elephant"
  }
];

// defining our variable to retrieve the html strings
// we asign an empty template string to htmlCode. We'll add something inside afterwards.
let htmlCode = ``;

// to get each single elephant object from the array and use them to build out html string, we need to open up our array, and we do that using forEach method. The forEach method, finds each item(object) in the array and returns them, this means we get 4 items that are objects back.

elephantsArray.forEach(function(singleElephantObjects) {
  // uncomment the line below, to see each of the 4 objects rendered in the console.
  //console.log(singleElephantObjects);

  // we take our previous empty htmlCode variable and add our html codes to it.

  // because the forEach method returns objects, we can then use the dot notation to reference children of the object, e.g, elephant.name;
  htmlCode =
    htmlCode +
    `
    <article>
      <div>
      <img src="${singleElephantObjects.pictureUrl}" alt="${
      singleElephantObjects.imdescAlt
    }">
      </div>
      <div>
      <h3>${singleElephantObjects.name}</h3>
      <p>${singleElephantObjects.IP}</p>
      <p>${singleElephantObjects.desc}</p>
      </div>
    </article>
  `;
  // uncomment the line below to see the output in the browser console.
  // console.log(htmlCode);
});

// currently, we have out html code showing in the browser console, we need to send it to our html file and render it there.
// here we define out the cards we want to be rendered to the DOM.

// ".all-elephant-cards" is the class of the empty div back in our index.html. We want to render the cards from our JS inside that div.

// we are simply saying, "let elephantCards be = to that div", to target that div, we reference the class we gave to it.
const elephantCards = document.querySelector(".all-elephant-cards");

// here's how we do the render;
// since elephantCards is now = to that div, we now say let the inside of that div take in our htmlCode variable that holds our html codes.
elephantCards.innerHTML = htmlCode;
