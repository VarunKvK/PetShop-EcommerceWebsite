//Array data

const data = [
  {
    id: 01,
    title: "Idept Dog Toy Ball",
    cost: 300,
    img: `https://m.media-amazon.com/images/I/61yNZsTkbiL._AC_SY355_.jpg`,
    link: `./Pages/category.html`,
  },
  {
    id: 02,
    title: "Mad Scientist",
    cost: 2025,
    img: `https://m.media-amazon.com/images/I/61RH4Igl-bL._SY606_.jpg`,
    link: `./Pages/category.html`,
  },
  {
    id: 03,
    title: "Solve Treats",
    cost: 1750,
    img: `https://m.media-amazon.com/images/I/81f0nZ921HL._SX425_.jpg`,
    link: `./Pages/category.html`,
  },
];

const datastuff2dogs=[{
  id: 04,
  title: "Rubber Suction CupBite",
  cost: 1450,
  img: `https://images-eu.ssl-images-amazon.com/images/I/4166HiBkM1L._SY300_SX300_QL70_FMwebp_.jpg`,
  link: `./Pages/category.html`,
},
{
  id: 05,
  title: "Tails Zoozies Crocodile",
  cost: 1500,
  img: `https://m.media-amazon.com/images/I/71XwvVLXVHL._SX425_.jpg`,
  link: `./Pages/category.html`,
},
{
  id: 06,
  title: "UC Evolution Rugby Ball",
  cost: 1200,
  img: `https://m.media-amazon.com/images/I/51Mp2g2zw4L._SX522_.jpg`,
  link: `./Pages/category.html`,
},]

//selectors
const stuffs = document.querySelector(".stuffs");
const stuffs2 = document.querySelector(".stuffs2");
const stuffscontainer = document.querySelector(".stuffscontainer");
const bordercontainer2 = document.querySelector(".bordercontainer2");
const loadIt=document.querySelector(".loadmore");
const dogad=document.querySelector(".dogad");
const fifthcontent=document.querySelector(".fifthcontent");
const loadmore2=document.querySelector(".loadmore2");
const footergoesdown=document.querySelector(".footer");

//Listener
loadIt.addEventListener('click',displaystuff2)


//Functions

function displaystuff2(){
  displayobjects2();
  displayobjects2=function(){};
  bordercontainer2.classList.add('stuffsexpand')
  bordercontainer2.classList.add('bordercontainer2stay')
  stuffs.classList.add('stuffstay')
  stuffs2.classList.add('stuffsgap')
  dogad.classList.add('advertisementdown')
  loadIt.classList.add('loadmoredown')
  fifthcontent.classList.add('fifthcontentgoesdown')
  loadmore2.classList.add('loadmore2goesdown')
  footergoesdown.classList.add('footermovesdown')
}

function displayobjects() {
  data.forEach((element) => {
    //space between containers
    const none = document.createElement("div");
    none.classList.add("nonetwo");
    stuffs.appendChild(none);

    //containers of the dog stuffs
    const stuffscontainer = document.createElement("div");
    stuffscontainer.classList.add("stuffscontainer");
    stuffs.appendChild(stuffscontainer);

    //imageconainer
    const imagecontainer = document.createElement("div");
    imagecontainer.classList.add("imagecontainer");
    stuffscontainer.appendChild(imagecontainer);

    //images
    const image = document.createElement("img");
    image.classList.add("imagetoy");
    image.src = element.img;
    imagecontainer.appendChild(image);

    //description container
    const desccontainer = document.createElement("div");
    desccontainer.classList.add("desc");
    stuffscontainer.appendChild(desccontainer);

    //title of the product
    const title = document.createElement("h1");
    title.innerHTML = element.title;
    desccontainer.appendChild(title);

    //cost of the product
    const cost = document.createElement("h3");
    cost.classList.add("costtitle");
    cost.textContent = element.cost + "  Rs";
    desccontainer.appendChild(cost);

    //buybutton
    const linkbuy = document.createElement("a");
    linkbuy.href = element.link;
    desccontainer.appendChild(linkbuy);
    //button
    const buttonbuy = document.createElement("button");
    buttonbuy.classList.add("buttonbuystyle");
    buttonbuy.innerHTML = "View";
    linkbuy.appendChild(buttonbuy);

    // //wishlistbutton
    // const linkwish = document.createElement("a");
    // desccontainer.appendChild(linkwish);
    // //button
    // const buttonwishlist = document.createElement("button");
    // buttonwishlist.classList.add("buttonwishstyle");
    // buttonwishlist.innerHTML =
    //   "Wishlist" +
    //   '<span class="iconify" data-icon="icon-park-outline:like"></span>';
    // linkwish.appendChild(buttonwishlist);
  });
}
displayobjects();

//Second Row
function displayobjects2() {
  datastuff2dogs.forEach((element) => {
    //space between containers
    const none = document.createElement("div");
    none.classList.add("nonetwo");
    stuffs.appendChild(none);

    //containers of the dog stuffs
    const stuffscontainer = document.createElement("div");
    stuffscontainer.classList.add("stuffscontainer");
    stuffs.appendChild(stuffscontainer);

    //imageconainer
    const imagecontainer = document.createElement("div");
    imagecontainer.classList.add("imagecontainer");
    stuffscontainer.appendChild(imagecontainer);

    //images
    const image = document.createElement("img");
    image.classList.add("imagetoy");
    image.src = element.img;
    imagecontainer.appendChild(image);

    //description container
    const desccontainer = document.createElement("div");
    desccontainer.classList.add("desc");
    stuffscontainer.appendChild(desccontainer);

    //title of the product
    const title = document.createElement("h1");
    title.innerHTML = element.title;
    desccontainer.appendChild(title);

    //cost of the product
    const cost = document.createElement("h3");
    cost.classList.add("costtitle");
    cost.textContent = element.cost + "  Rs";
    desccontainer.appendChild(cost);

    //buybutton
    const linkbuy = document.createElement("a");
    linkbuy.href = element.link;
    desccontainer.appendChild(linkbuy);
    // button
    const buttonbuy = document.createElement("button");
    buttonbuy.classList.add("buttonbuystyle");
    buttonbuy.innerHTML = "View";
    linkbuy.appendChild(buttonbuy);

    // //wishlistbutton
    // const linkwish = document.createElement("a");
    // desccontainer.appendChild(linkwish);
    // //button
    // const buttonwishlist = document.createElement("button");
    // buttonwishlist.classList.add("buttonwishstyle");
    // buttonwishlist.innerHTML =
    //   "Wishlist" +
    //   '<span class="iconify" data-icon="icon-park-outline:like"></span>';
    // linkwish.appendChild(buttonwishlist);
  });
}

