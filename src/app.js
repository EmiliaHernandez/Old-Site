
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
];

let htmlCode = ``;

elephantsArray.forEach(function(singleElephantObjects) {
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
});

const elephantCards = document.querySelector(".all-elephant-cards");
elephantCards.innerHTML = htmlCode;
