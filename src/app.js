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
  ,
  {
    id: 5,
    name: "Chrollo",
    IP: "HunterxHunter",
    desc: "this should come as a surprise to no one",
    pictureUrl:
      "https://dafunda.com/wp-content/uploads/2021/06/Kemampuan-Nen-Miliknya.jpg",
    imdescAlt: "Chrollo from HXH"
  },
  {
    id: 6,
    name: "Cat Noir",
    IP: "Miraculous LadyBug",
    desc: "Cat noir, NOT Adrien!",
    pictureUrl:
      "https://qph.cf2.quoracdn.net/main-qimg-1d41a105852966d5a1388e44edd00c2c-pjlq",
    imdescAlt: "Cat Noir from miraculous ladybug"
  },
  {
    id: 7,
    name: "Chase Mathews",
    IP: "Zoey101",
    desc: "my exposure to a simp",
    pictureUrl:
      "https://www.independent.ie/incoming/28eb3/36053220.ece/AUTOCROP/w1240h700/chase.png",
    imdescAlt: "chase from zoey101"
  },
  {
    id: 8,
    name: "Chidi Anagonye",
    IP: "The Good Place",
    desc: "Written by a woman",
    pictureUrl:
      "https://imgix.bustle.com/rehost/2016/9/29/22972c3e-eb7c-4e69-b5c7-284c25ce88a6.JPG?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
    imdescAlt: "Chidi Anagonye from the goodplace"
  },  {
    id: 9,
    name: "Emily",
    IP: "Corpse Bride",
    desc: "Best burton girl?",
    pictureUrl:
      "https://wallpapercave.com/wp/wp9983370.jpg",
    imdescAlt: ""
  },
  {
    id: 10,
    name: "Dave Navarro",
    IP: "Ink Master",
    desc: "He is a character in my brain",
    pictureUrl:
      "https://www.looper.com/img/gallery/what-ink-master-fans-want-to-see-in-a-new-season/l-intro-1614702911.jpg",
    imdescAlt: ""
  },
  {
    id: 11,
    name: "Deana Troi",
    IP: "Star Trek: Next Generation",
    desc: "i clap i clap whenever she appears",
    pictureUrl:
      "https://imagez.tmz.com/image/d4/4by3/2020/01/23/d4ce1f06284c4ac09d840d2833cfaf04_md.jpg",
    imdescAlt: ""
  },
  {
    id: 12,
    name: "Doc-Ock",
    IP: "Spider-Man Franchise",
    desc: "if nobody picks him i might have to",
    pictureUrl:
      "https://www.thewrap.com/wp-content/uploads/2021/12/spider-man-2-doc-ock.jpg",
    imdescAlt: ""
  },  
  {
    id: 13,
    name: "Domino",
    IP: "Deadpool 2",
    desc: "put her back on my screen NOW",
    pictureUrl:
      "https://www.denofgeek.com/wp-content/uploads/2021/11/deadpool-2-domino-zazie-beetz-fox.jpg?resize=768%2C432",
    imdescAlt: ""
  },  
  {
    id: 14,
    name: "House leaders",
    IP: "Fire Emblem: 3 Houses",
    desc: "I think they all have a little of something i like",
    pictureUrl:
      "https://www.gamespot.com/a/uploads/scale_landscape/1575/15759911/3566997-fire-emblem-3-houses-gift-guide-2019-features-promo12.jpg",
    imdescAlt: ""
  },  {
    id: 15,
    name: "El Diablo",
    IP: "Suicide Squad",
    desc: "latino",
    pictureUrl:
      "https://tvovermind.com/wp-content/uploads/2018/04/El-Diablo-640x384.jpg",
    imdescAlt: ""
  },  {
    id: 16,
    name: "Eraserhead",
    IP: "My Hero Academia",
    desc: "i knew as soon as he walked in",
    pictureUrl:
      "https://staticg.sportskeeda.com/editor/2022/11/75953-16672896403619-1920.jpg",
    imdescAlt: ""
  },  {
    id: 17,
    name: "Lina",
    IP: "Bratz: Fashion Pixiez",
    desc: "I wanted to be her SO bad as an 8 year old",
    pictureUrl:
      "https://i.pinimg.com/736x/98/b1/68/98b1685265685582a6947fb92f525245.jpg",
    imdescAlt: ""
  },
  {
    id: 18,
    name: "Ferb and Vanessa",
    IP: "Phineas and Ferb",
    desc: "He was a silent character and I idolized him",
    pictureUrl:
      "https://img.buzzfeed.com/buzzfeed-static/static/2018-03/6/16/asset/buzzfeed-prod-fastlane-03/sub-buzz-6491-1520370863-5.jpg?crop=1501:1000;80,0",
    imdescAlt: ""
  },
  {
    id: 19,
    name: "Team Azula",
    IP: "Avatar",
    desc: "i dont care if she's crazy",
    pictureUrl:
      "https://dankanator.com/wp-content/uploads/2020/10/avatar-original-plan-azula-team-different-no-ty-lee-mai.jpg",
    imdescAlt: ""
  },
  {
    id: 20,
    name: "Garnet",
    IP: "Steven Universe",
    desc: "my birthstone and favorite crystal gem",
    pictureUrl:
      "https://studybreaks.com/wp-content/uploads/2017/05/tumblr_mveqpzE9LV1rgmtf9o6_1280.png",
    imdescAlt: ""
  },
  {
    id: 21,
    name: "Geordi Laforge",
    IP: "Star Trek: Next Generation",
    desc: "Engineer",
    pictureUrl:
      "https://i.insider.com/5652f613dd089511058b4636?width=750&format=jpeg&auto=webp",
    imdescAlt: ""
  },
  {
    id: 25,
    name: "Jill Stingray",
    IP: "Va-11 Hall-a",
    desc: "mhm",
    pictureUrl:
      "https://c4.wallpaperflare.com/wallpaper/70/552/866/anime-girls-artwork-va-11-hall-a-wallpaper-preview.jpg",
    imdescAlt: ""
  },
  {
    id: 23,
    name: "Wilt",
    IP: "Fosters Home for Imaginary Friends",
    desc: "I wanted him to be real",
    pictureUrl:
      "https://thumbs.gfycat.com/AnxiousSoggyIvorybackedwoodswallow-size_restricted.gif",
    imdescAlt: ""
  },
  {
    id: 24,
    name: "Tim",
    IP: "Mysims",
    desc: "i love him so much",
    pictureUrl:
      "https://static1.personality-database.com/profile_images/befe7c260f7a43f39d32b77d83b796d7.png",
    imdescAlt: ""
  },
  {
    id: 22,
    name: "Gir",
    IP: "Invader Zim",
    desc: "drew him all the time",
    pictureUrl:
      "https://www.pngitem.com/pimgs/m/147-1475033_gir-png-gir-png-invader-zim-gir-dog.png",
    imdescAlt: ""
  },
  {
    id: 26,
    name: "Kurama",
    IP: "Yu yu Hakusho",
    desc: "Pink is my favorite color",
    pictureUrl:
      "https://animesher.com/orig/1/190/1905/19056/animesher.com_long-hair-green-eyes-shuichi-minamino-1905613.gif",
    imdescAlt: ""
  },
  {
    id: 27,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },
  {
    id: 28,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },
  {
    id: 29,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },
  {
    id: 30,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },
  {
    id: 31,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },
  {
    id: 32,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },
  {
    id: 33,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },
  {
    id: 34,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },
  {
    id: 35,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },

  /*template for array
  {
    id: ,
    name: "",
    IP: "",
    desc: "",
    pictureUrl:
      "",
    imdescAlt: ""
  },
  */
];
//https://static.wikia.nocookie.net/powerlisting/images/7/78/Rose_Whip.gif/revision/latest?cb=20190307190944
let htmlCode = ``;

// to get each single elephant object from the array and use them to build out html string, we need to open up our array, and we do that using forEach method. The forEach method, finds each item(object) in the array and returns them, this means we get 4 items that are objects back.

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
