
const elephantsArray = [
  {
    id: 1,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },
  {
    id: 2,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },
  {
    id: 3,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
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
