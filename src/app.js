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
    name: "Geordi La Forge",
    IP: "Star Trek: Next Generation",
    desc: "watching star trek:😴, Geordi starts talking:😳",
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
    name: "Izzy Daniels",
    IP: "Jump In!",
    desc: "favorite DCOM and it's not even close",
    pictureUrl:
      "https://s.hdnux.com/photos/10/11/16/2134960/6/1200x0.jpg",
    imdescAlt: ""
  },
  {
    id: 28,
    name: "Ms. Bellum",
    IP: "Powerpuff Girls",
    desc: "mm",
    pictureUrl:
      "https://tvline.com/wp-content/uploads/2021/03/powerpuff-girls-sara-bellum.jpg?w=620",
    imdescAlt: ""
  },
  {
    id: 29,
    name: "Wario",
    IP: "Wario",
    desc: "Only Omar Dogan's depiction of him",
    pictureUrl:
      "https://preview.redd.it/virgin-luigi-chad-wario-all-credit-to-omardogan1976-on-v0-secqzt3059r91.jpg?width=640&crop=smart&auto=webp&s=d3f954219cbe3a8d7249cb538e0d94947a7aa245",
    imdescAlt: ""
  },
  {
    id: 30,
    name: "Lorna",
    IP: "Over the Garden Wall",
    desc: "voice",
    pictureUrl:
      "https://i.pinimg.com/originals/e9/56/f7/e956f7008f610251418323e14185feec.png",
    imdescAlt: ""
  },
  {
    id: 31,
    name: "Yusuke Urameshi",
    IP: "Yu Yu Hakusho",
    desc: "mm",
    pictureUrl:
      "https://i.pinimg.com/originals/06/49/85/064985d6314af40100052d6dbe0c84fc.gif",
    imdescAlt: ""
  },
  {
    id: 32,
    name: "Tanjiro",
    IP: "Demon Slayer",
    desc: "Mexican",
    pictureUrl:
      "https://www.gifcen.com/wp-content/uploads/2022/03/tanjiro-gif-1.gif",
    imdescAlt: ""
  },
  {
    id: 33,
    name: "Valkyrae",
    IP: "MCU",
    desc: "I know what you are",
    pictureUrl:
      "https://media.tenor.com/j0gSWGn-kRAAAAAd/valkyrie-thor-ragnarok.gif",
    imdescAlt: ""
  },
  {
    id: 34,
    name: "Spider-Man(ANY)",
    IP: "Marvel",
    desc: "Some are better than others",
    pictureUrl:
      "https://thumbs.gfycat.com/AdorableLividJoey-size_restricted.gif",
    imdescAlt: ""
  },
  {
    id: 35,
    name: "Shino",
    IP: "Naruto",
    desc: "Bug boy",
    pictureUrl:
      "https://media.tenor.com/FGcLOxieBtEAAAAM/shino-naruto.gif",
    imdescAlt: ""
  },
  {
    id: 36,
    name: "Sebastian",
    IP: "Stardew Valley",
    desc: "el es emo?!",
    pictureUrl:
      "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/05/Stardew-Valley---Sebastian-wedding-(left)-Sebastians-portrait-(right).jpg",
    imdescAlt: ""
  },
  {
    id: 37,
    name: "Jack Skellington",
    IP: "Nightmare before christmas",
    desc: "He is special to me",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTgwMjAyMzExN15BMl5BanBnXkFtZTcwMDg2ODMyMw@@._V1_.jpg",
    imdescAlt: ""
  },
  {
    id: 38,
    name: "Howl Pendragon",
    IP: "Howl's Moving Castle",
    desc: "Movie is boring as hell but wow",
    pictureUrl:
      "https://p.favim.com/orig/2018/11/17/studio-ghibli-gif-howl39s-moving-castle-Favim.com-6536864.gif",
    imdescAlt: ""
  },
  {
    id: 39,
    name: "Mordecai",
    IP: "Regular Show",
    desc: "This is a voice-based decision",
    pictureUrl:
      "https://external-preview.redd.it/IFydAkETBrHEDINecNyqKLjdXd9pRFNdqdBL2-HocrY.png?width=640&crop=smart&auto=webp&s=e3dcfafac827ab363f588aa89496b4a124477842",
    imdescAlt: ""
  },
  {
    id: 40,
    name: "Paddington Bear",
    IP: "Paddington",
    desc: "I adore him",
    pictureUrl:
      "https://media.npr.org/assets/img/2018/06/05/pb2-ra-00012_wide-e13ace2630a1419a87931c3f2059e3734275f16c.jpg",
    imdescAlt: ""
  },
  {
    id: 41,
    name: "Rodrick Heffley",
    IP: "Diary of a Wimpy Kid",
    desc: "He's been here for 12 years",
    pictureUrl:
      "https://carboncostume.com/wordpress/wp-content/uploads/2020/08/rodrickheffley-diaryofawimpykid-character-1.jpg",
    imdescAlt: ""
  },
  {
    id: 42,
    name: "Maru",
    IP: "Stardew Valley",
    desc: "STEM girl swag",
    pictureUrl:
      "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/05/Stardew-Valley---Maru-wedding-(left)-Maru-portrait-(right).jpg",
    imdescAlt: ""
  },
  {
    id: 43,
    name: "Wirt",
    IP: "Over the Garden Wall",
    desc: "I think I know where you can get the hat",
    pictureUrl:
      "https://i.pinimg.com/originals/25/98/90/259890c59ba120eac2bbc651760fb8d8.png",
    imdescAlt: ""
  },
  {
    id: 44,
    name: "Kylo Ren",
    IP: "Star Wars",
    desc: "Since day 1",
    pictureUrl:
      "https://www.mensjournal.com/wp-content/uploads/2020/05/Driver.jpg?w=900&quality=86&strip=all",
    imdescAlt: ""
  },
  {
    id: 45,
    name: "Optimus Prime",
    IP: "Transformers",
    desc: "he is just the best isnt he",
    pictureUrl:
      "https://itsastampede615821596.files.wordpress.com/2021/02/best-optimus-prime-movie-quotes.jpg?w=600",
    imdescAlt: ""
  },  {
    id: 46,
    name: "Rei/Sailor Mars",
    IP: "Sailor Moon",
    desc: "would beat you up",
    pictureUrl:
      "https://media3.giphy.com/media/11FAUcye6lC28E/giphy.gif",
    imdescAlt: ""
  },
  {
    id: 46,
    name: "Sailor Neptune",
    IP: "Sailor Moon",
    desc: "Cannonically lesbian",
    pictureUrl:
      "https://i.pinimg.com/originals/53/db/80/53db8014b6a2020c9fd54f53240fdbb4.gif",
    imdescAlt: ""
  },
  {
    id: 47,
    name: "Tuxedo Mask/Darrien",
    IP: "Sailor Moon",
    desc: "Full package",
    pictureUrl:
      "https://i.gifer.com/KFCQ.gif",
    imdescAlt: ""
  },
  {
    id: 47,
    name: "Joker",
    IP: "Persona",
    desc: "Has anyone ever told you you look like Joker?",
    pictureUrl:
      "https://i.pinimg.com/originals/26/2e/b8/262eb8a2aee4e7e12f60203ca8dcf8e4.png",
    imdescAlt: ""
  },
  {
    id: 48,
    name: "Strawberry Shortcake Cast",
    IP: "PStrawberry Shortcake",
    desc: "What if we dressed up like them? 😳",
    pictureUrl:
      "https://imageservice.disco.peacocktv.com/uuid/4facfd79-e113-3e1c-a82a-36f8a2b13707/LAND_16_9?language=eng&territory=US&proposition=NBCUOTT&version=deab97bc-02c5-3ab4-b50d-939b7384f18a",
    imdescAlt: ""
  },
  {
    id: 49,
    name: "Jigen",
    IP: "Lupin The Third",
    desc: "Something about eyeless characters",
    pictureUrl:
      "https://i.kym-cdn.com/photos/images/original/001/240/601/47b.gif",
    imdescAlt: ""
  },
  {
    id: 50,
    name: "Gordon Ramsay",
    IP: "Food",
    desc: "Subscribed",
    pictureUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_16/1426313/gordon-ramsay-today-main-190416.jpg",
    imdescAlt: ""
  },
  {
    id: 51,
    name: "Rin",
    IP: "Fruits Basket",
    desc: "She's so fucked up",
    pictureUrl:
      "https://otakuauthor.com/wp-content/uploads/2020/07/Fruits-Basket-Episode-39-Rin.jpg",
    imdescAlt: "Rin from fruits basket"
  },
  {
    id: 52,
    name: "Juvia",
    IP: "Fairy Tail",
    desc: "Wow she's literally me",
    pictureUrl:
      "https://i.redd.it/atqs63qro4o81.jpg",
    imdescAlt: ""
  },
  {
    id: 53,
    name: "Mindy",
    IP: "Drake & Josh",
    desc: "I haven't seen one like her since",
    pictureUrl:
      "https://e.radio-grpp.io/large/2018/07/12/075607_645220.jpg",
    imdescAlt: ""
  },
  {
    id: 54,
    name: "Sailor Jupiter",
    IP: "Sailor Moon",
    desc: "she actually beats up dudes",
    pictureUrl:
      "https://carboncostume.com/wordpress/wp-content/uploads/2022/02/sailor-jupiter-from-sailor-moon.jpg",
    imdescAlt: ""
  },
  {
    id: 55,
    name: "Sucker Punch Cast",
    IP: "Sucker Punch",
    desc: "It was ahead of its time",
    pictureUrl:
      "https://cdn.mos.cms.futurecdn.net/JX5KBgSTasEdaTHiUckamg.jpg",
    imdescAlt: ""
  },
  {
    id: 56,
    name: "Asuna",
    IP: "Sword Art Online",
    desc: "Merch, I had merch",
    pictureUrl:
      "https://media.tenor.com/enIv4g7nYkUAAAAC/yuuki-asuna-sword-art-online.gif",
    imdescAlt: ""
  },
  {
    id: 57,
    name: "The Bratz",
    IP: "Bratz",
    desc: "Some are better than others",
    pictureUrl:
      "https://static.tvtropes.org/pmwiki/pub/images/uivnay6dc7595jxobzypedmqqj3gzida_yky7bdf9kuyyzdioe2hkul28egj.jpg",
    imdescAlt: ""
  },
  {
    id: 58,
    name: "Chiyuki",
    IP: "Death Parade",
    desc: "I don't care about that man",
    pictureUrl:
      "https://img.hulu.com/user/v3/artwork/08580b61-4168-4a11-97a9-f606b8e5989a?base_image_bucket_name=image_manager&base_image=87bd71c5-7a6b-4e01-8556-2b74ef6f5456&size=600x338&format=jpeg",
    imdescAlt: ""
  },
  {
    id: 59,
    name: "Tsubaki",
    IP: "Soul Eater",
    desc: "i hate that blue boy",
    pictureUrl:
      "https://wallpapercave.com/wp/wp8351581.jpg",
    imdescAlt: ""
  },
  {
    id: 60,
    name: "Tae Takemi",
    IP: "Persona",
    desc: "im ill",
    pictureUrl:
      "https://i.pinimg.com/736x/bf/02/08/bf020843c00f24fd3f40a8f9459f1175.jpg",
    imdescAlt: ""
  },
  {
    id: 61,
    name: "Brock",
    IP: "Pokemon",
    desc: "nostalgia",
    pictureUrl:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/brock-cerulean-city.jpg",
    imdescAlt: "brock"
  },
  {
    id: 62,
    name: "Remy",
    IP: "Ratouille",
    desc: "he makes me go ra-ta-toing",
    pictureUrl:
      "https://static01.nyt.com/images/2020/11/22/multimedia/00xp-ratatouille/00xp-ratatouille-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    imdescAlt: ""
  },
  {
    id: 63,
    name: "Rock Lee",
    IP: "Naruto",
    desc: "hehe",
    pictureUrl:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/09/rock-lee-Cropped.jpg",
    imdescAlt: ""
  },
  {
    id: 64,
    name: "Mike",
    IP: "Warioware",
    desc: "pew pew",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBZahkUwLVGTacPjASZyO0SzO9bQkFad07A&usqp=CAU",
    imdescAlt: ""
  },
  {
    id: 65,
    name: "Puss in boots",
    IP: "Shrek",
    desc: "antonio banderas",
    pictureUrl:
      "https://i.ytimg.com/vi/vaJ2yQC_ktY/maxresdefault.jpg",
    imdescAlt: ""
  },
  {
    id: 66,
    name: "Tinker Bell Fairies",
    IP: "TinkerBell",
    desc: "eeeee",
    pictureUrl:
      "https://i.pinimg.com/originals/94/c6/d0/94c6d00c4997dc550f265de308f49c55.jpg",
    imdescAlt: ""
  },
  {
    id: 67,
    name: "RON(LEGO)",
    IP: "Lego",
    desc: "i collect them",
    pictureUrl:
      "https://www.lego.com/cdn/cs/set/assets/blta631cc3f048ae96a/HP-Char_Ron_1-Sidekick-Tall.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1",
    imdescAlt: ""
  },
  {
    id: 68,
    name: "Edward Scissorhands",
    IP: "Edward Scissorhands",
    desc: "he's different",
    pictureUrl:
      "https://variety.com/wp-content/uploads/2015/12/edward-scissorhands.jpg",
    imdescAlt: ""
  },
  {
    id: 69,
    name: "Jade",
    IP: "Victorious",
    desc: "she was so mean",
    pictureUrl:
      "https://64.media.tumblr.com/e9735a0ec354689fbbf3db2d5342a4eb/tumblr_inline_o0nxfo9FqY1r8mwrd_540.jpg",
    imdescAlt: ""
  },
  {
    id: 70,
    name: "Monster High Full Cast",
    IP: "Monster High",
    desc: "They all rule",
    pictureUrl:
      "https://i.ytimg.com/vi/jaWdRAjEUkw/maxresdefault.jpg",
    imdescAlt: ""
  },


//

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
shuffle(elephantsArray);
function shuffle(elephantsArray) {
  let currentIndex = elephantsArray.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [elephantsArray[currentIndex], elephantsArray[randomIndex]] = [
      elephantsArray[randomIndex], elephantsArray[currentIndex]];
  }

  return elephantsArray;}
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
