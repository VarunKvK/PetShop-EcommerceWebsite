//Selectors
const category = document.querySelector(".categorydog");
const categorycat = document.querySelector(".categorycat");
const toys = document.querySelector(".carousel-inner");
const dogtoys = document.querySelector(".carousel-item");
const dogtoys2 = document.getElementById("dogdata2");
const cattoys = document.getElementById("catdata");
const cattoys2 = document.getElementById("catdata2");
const nextbtn=document.querySelector(".carousel-control-next")
const nextbtn2=document.getElementById("nextbutton")
const prev=document.getElementById("prevbtn")
const next=document.getElementById("nextbtn")
const next2=document.getElementById("next2")
////////////////////////////////////// DogtoysArray ////////////////////////////////////////////////////////////////////////
const data = [
  {
    id: 01,
    title: "Idept Dog Toy Ball",
    cost: 300,
    img: `https://m.media-amazon.com/images/I/61yNZsTkbiL._AC_SY355_.jpg`,
    // link: `../ProductPage/Ball.html`,
    class:'ball',
    id:'ball',
    name:'balltitle',
    imageid:'ballimage',
    costid:'ballcost'
  },
  {
    id: 02,
    title: "Mad Scientist",
    cost: 2025,
    img: `https://m.media-amazon.com/images/I/61RH4Igl-bL._SY606_.jpg`,
    // link: `../ProductPage/Scientist.html`,
    class:'treat',
    id:'treat',
    name:'treattitle',
    imageid:'treatimage',
    costid:'treatcost'
  },
  {
    id: 03,
    title: "Solve Treats",
    cost: 1750,
    img: `https://m.media-amazon.com/images/I/81f0nZ921HL._SX425_.jpg`,
    // link: `../ProductPage/Treats.html`,
    class:'bowl',
    id:'bowl',
    name:'bowltitle',
    imageid:'bowlimage',
    costid:'bowlcost'
  },
];

const data2 = [
  {
    id: 04,
    title: "Rubber Suction CupBite",
    cost: 1700,
    img: `https://images-eu.ssl-images-amazon.com/images/I/4166HiBkM1L._SY300_SX300_QL70_FMwebp_.jpg`,
    // link: `../ProductPage/Suction.html`,
    class:'cup',
    id:'cup',
    name:'cuptitle',
    imageid:'cupimage',
    costid:'cupcost'
  },
  {
    id: 05,
    title: "Tails Zoozies Crocodile",
    cost: 1500,
    img: `https://m.media-amazon.com/images/I/71XwvVLXVHL._SX425_.jpg`,
    // link: `../ProductPage/Croc.html`,
    class:'croc',
    id:'croc',
    name:'croctitle',
    imageid:'crocimage',
    costid:'croccost'

  },
  {
    id: 06,
    title: "UC Evolution Rugby Ball",
    cost: 1200,
    img: `https://m.media-amazon.com/images/I/51Mp2g2zw4L._SX522_.jpg`,
    // link: `../ProductPage/Rugby.html`,
    class:'rugby',
    id:'rugby',
    name:'rugbytitle',
    imageid:'rugbyimage',
    costid:'rugbycost'
  },]

//////////////////////////////////////// Function For DgToys //////////////////////////////////////
function dog() {
  data.map((dogdata) => {
    // DataDog

    // var dogiddata=dataid.map((name)=>{
    //   title.setAttribute(name.id);
    // });
    const dogtoydiv = document.createElement("div");
    dogtoydiv.setAttribute("class",dogdata.class);
    dogtoys.appendChild(dogtoydiv);
  
    const title=document.createElement('h1');
    title.innerHTML=dogdata.title;
    title.setAttribute("id",dogdata.name);
    title.classList.add("dogproductname");
    
    dogtoydiv.appendChild(title);
    
    const cost=document.createElement('h2');
    cost.innerHTML='&#8377 '+dogdata.cost;
    cost.classList.add("dogcost");
    cost.setAttribute("id",dogdata.costid);
    dogtoydiv.appendChild(cost);

    const dogtoyimage = document.createElement("img");
    dogtoyimage.src = dogdata.img;
    dogtoyimage.classList.add("dogtoyimage");
    dogtoyimage.setAttribute("id",dogdata.imageid);
    dogtoydiv.appendChild(dogtoyimage);

    const dogbtndiv=document.createElement('div');
    dogbtndiv.classList.add("dogcostdiv");
    dogtoydiv.appendChild(dogbtndiv);

    // const doglink=document.createElement('a')
    // doglink.href=dogdata.link;
    // dogbtndiv.appendChild(doglink);

    const dogbuybtn=document.createElement('button');
    dogbuybtn.classList.add("buyproductbtn");
    dogbuybtn.setAttribute("id",dogdata.id)
    dogbuybtn.textContent='Buy';
    dogbtndiv.appendChild(dogbuybtn);
    
    // const dogwishbtn=document.createElement('button');
    // dogwishbtn.classList.add("wishproductbtn");
    // dogwishbtn.textContent='Wishlist';
    // dogbtndiv.appendChild(dogwishbtn);

    //EventListeners
    dogtoydiv.addEventListener('mouseenter',titleEnters);
    dogtoydiv.addEventListener('mouseleave',titleLeaves);

    function titleEnters(){
      title.classList.add('dognameappear');
      cost.classList.add('dogcostappear');
      dogbuybtn.classList.add('buyvisible');
      // dogwishbtn.classList.add('wishvisible');
      dogbtndiv.classList.add('dogcostdivvisible');
    }

    function titleLeaves(){
      title.classList.remove('dognameappear');
      cost.classList.remove('dogcostappear');
      dogbuybtn.classList.remove('buyvisible');
      // dogwishbtn.classList.remove('wishvisible');
      dogbtndiv.classList.remove('dogcostdivvisible');
    }
  });
}
dog();

function dog2() {
  data2.map((dogdata2) => {
    // DataDog

    // const doglink=document.createElement('a');
    // doglink.href=dogdata2.link;
    // dogtoys2.appendChild(doglink)

    const dogtoydiv = document.createElement("div");
    dogtoydiv.setAttribute("class",dogdata2.class);
    dogtoys2.appendChild(dogtoydiv);
  
    const title=document.createElement('h1');
    title.innerHTML=dogdata2.title;
    title.classList.add("dogproductname");
    title.setAttribute("id",dogdata2.name)
    dogtoydiv.appendChild(title);
    
    const cost=document.createElement('h2');
    cost.innerHTML='&#8377 '+dogdata2.cost;
    cost.setAttribute("id",dogdata2.costid)
    cost.classList.add("dogcost");
    dogtoydiv.appendChild(cost);

    const dogtoyimage = document.createElement("img");
    dogtoyimage.src = dogdata2.img;
    dogtoyimage.classList.add("dogtoyimage");
    dogtoyimage.setAttribute("id",dogdata2.imageid)
    dogtoydiv.appendChild(dogtoyimage);

    const dogbtndiv=document.createElement('div');
    dogbtndiv.classList.add("dogcostdiv");
    dogtoydiv.appendChild(dogbtndiv);

    // const doglink2=document.createElement('a')
    // doglink2.href=dogdata2.link;
    // dogbtndiv.appendChild(doglink2);
    
    const dogbuybtn=document.createElement('button');
    dogbuybtn.classList.add("buyproductbtn");
    dogbuybtn.setAttribute("id",dogdata2.id)
    dogbuybtn.textContent='Buy';
    dogbtndiv.appendChild(dogbuybtn);
    
    // const dogwishbtn=document.createElement('button');
    // dogwishbtn.classList.add("wishproductbtn");
    // dogwishbtn.textContent='Wishlist';
    // dogbtndiv.appendChild(dogwishbtn);
    //EventListeners
    dogtoydiv.addEventListener('mouseenter',titleEnters);
    dogtoydiv.addEventListener('mouseleave',titleLeaves);

    function titleEnters(){
      title.classList.add('dognameappear');
      cost.classList.add('dogcostappear');
      dogbuybtn.classList.add('buyvisible');
      // dogwishbtn.classList.add('wishvisible');
      dogbtndiv.classList.add('dogcostdivvisible')
    }

    function titleLeaves(){
      title.classList.remove('dognameappear');
      cost.classList.remove('dogcostappear');
      dogbuybtn.classList.remove('buyvisible');
      // dogwishbtn.classList.remove('wishvisible');
      dogbtndiv.classList.remove('dogcostdivvisible')
    }
  });
}
dog2();


////////////////////////////////////// CatData //////////////////////////////////////////////////////////////////////////
//CatArrayaDataOne
const catdataone = [
  {
    id: 01,
    title:"Cat Tower",
    cost: 350,
    img: `https://m.media-amazon.com/images/I/31W+NDl2vcS._SY300_SX300_.jpg`,
    // link: `../ProductPage/CatProductPages/CatTower.html`,
    class:"tower",
    id:'tower',
    name:'towertitle',
    imageid:'towerimage',
    costid:'towercost'
  },
  {
    id: 02,
    title: "Cat Tunnel Toy",
    cost: 525,
    img: `https://m.media-amazon.com/images/I/61aIhdyzsKS._SL1200_.jpg`,
    // link: `../ProductPage/CatProductPages/CatTunnel.html`,
    class:"tunnel",
    id:'tunnel',
    name:'tunneltitle',
    imageid:'tunnelimage',
    costid:'tunnelcost'
  },
  {
    id: 03,
    title: "Trixie Snack Ball Cat",
    cost: 250,
    img: `https://m.media-amazon.com/images/I/513ZZSfq1wL._SX466_.jpg`,
    // link: `../ProductPage/CatProductPages/SnackBall.html`,
    class:"snack",
    id:'snack',
    name:'snacktitle',
    imageid:'snackimage',
    costid:'snackcost'
  },
];

//CatArrayDataTwo
const catdatatwo = [
{
  id: 01,
  title:"Cat Adjustible Bib",
  cost: 350,
  img: `https://m.media-amazon.com/images/I/51edkYu9iPS._SX466_.jpg`,
  link: ``,
  class:'feeder',
  id:'feeder',
    name:'feedertitle',
    imageid:'feederimage',
    costid:'feedercost'
},
{
  id: 02,
  title: "Cat Wooden House",
  cost: 525,
  img: `https://m.media-amazon.com/images/I/61FwWsquwRL._AC_SY1000_FMwebp_.jpg`,
  link: ``,
  class:'wood',
  id:'wood',
    name:'woodtitle',
    imageid:'woodimage',
    costid:'woodcost'
},
{
  id: 03,
  title: "Cat House",
  cost: 250,
  img: `https://m.media-amazon.com/images/I/41iNZltBmzL._AC_SY1000_FMwebp_.jpg`,
  link: ``,
  class:"house",
  id:'house',
    name:'housetitle',
    imageid:'houseimage',
    costid:'housecost'
},
];


//////////////////////////////////////// CatFunction ////////////////////////////////////////////////////////////////////////////
//CatArrayaDataOne

function cat() {
  catdataone.map((catdata) => {
    // DataCat

    const cattoydiv = document.createElement("div");
    cattoydiv.setAttribute("class",catdata.class);
    cattoys.appendChild(cattoydiv);
  
    const title=document.createElement('h1');
    title.innerHTML=catdata.title;
    title.setAttribute("id",catdata.name)
    title.classList.add("catproductname");
    cattoydiv.appendChild(title);
    
    const cost=document.createElement('h2');
    cost.innerHTML='&#8377 '+catdata.cost;
    cost.setAttribute("id",catdata.costid)
    cost.classList.add("dogcost");
    cattoydiv.appendChild(cost);

    const cattoyimage = document.createElement("img");
    cattoyimage.src = catdata.img;
    cattoyimage.setAttribute("id",catdata.imageid)
    cattoyimage.classList.add("cattoyimage");
    cattoydiv.appendChild(cattoyimage);

    const catbtndiv=document.createElement('div');
    catbtndiv.classList.add("catcostdiv");
    cattoydiv.appendChild(catbtndiv);

    // const catlink=document.createElement('a')
    // catlink.href=catdata.link;
    // catbtndiv.appendChild(catlink);

    const catbuybtn=document.createElement('button');
    catbuybtn.classList.add("buyproductbtn");
    catbuybtn.setAttribute("id",catdata.id)
    catbuybtn.textContent='Buy';
    catbtndiv.appendChild(catbuybtn);
    
    // const catwishbtn=document.createElement('button');
    // catwishbtn.classList.add("wishproductbtn");
    // catwishbtn.textContent='Wishlist';
    // catbtndiv.appendChild(catwishbtn);

    //EventListeners
    cattoydiv.addEventListener('mouseenter',titleEnters);
    cattoydiv.addEventListener('mouseleave',titleLeaves);

    function titleEnters(){
      title.classList.add('catnameappear');
      cost.classList.add('catcostappear');
      catbuybtn.classList.add('buyvisible');
      // catwishbtn.classList.add('wishvisible');
      catbtndiv.classList.add('catcostdivvisible');
    }

    function titleLeaves(){
      title.classList.remove('catnameappear');
      cost.classList.remove('catcostappear');
      catbuybtn.classList.remove('buyvisible');
      // catwishbtn.classList.remove('wishvisible');
      catbtndiv.classList.remove('catcostdivvisible');
    }
  });
}
cat();
//CatArrayDataTwo

function cat2() {
  catdatatwo.map((cattoys) => {
    // DataDog

    const cattoydiv = document.createElement("div");
    cattoydiv.setAttribute("class",cattoys.class);
    cattoys2.appendChild(cattoydiv);
  
    const title=document.createElement('h1');
    title.innerHTML=cattoys.title;
    title.setAttribute("id",cattoys.name)
    title.classList.add("catproductname");
    cattoydiv.appendChild(title);
    
    const cost=document.createElement('h2');
    cost.innerHTML='&#8377 '+cattoys.cost;
    cost.setAttribute("id",cattoys.costid)
    cost.classList.add("dogcost");
    cattoydiv.appendChild(cost);

    const cattoyimage = document.createElement("img");
    cattoyimage.src = cattoys.img;
    cattoyimage.classList.add("cattoyimage");
    cattoyimage.setAttribute("id",cattoys.imageid)
    cattoydiv.appendChild(cattoyimage);

    const catbtndiv=document.createElement('div');
    catbtndiv.classList.add("catcostdiv");
    cattoydiv.appendChild(catbtndiv);

    // const catlink2=document.createElement('a')
    // catlink2.href=cattoys.link;
    // catbtndiv.appendChild(catlink2);

    const catbuybtn=document.createElement('button');
    catbuybtn.classList.add("buyproductbtn");
    catbuybtn.textContent='Buy';
    catbuybtn.setAttribute("id",cattoys.id)
    catbtndiv.appendChild(catbuybtn);
    
    // const catwishbtn=document.createElement('button');
    // catwishbtn.classList.add("wishproductbtn");
    // catwishbtn.textContent='Wishlist';
    // catbtndiv.appendChild(catwishbtn);

    //EventListeners
    cattoydiv.addEventListener('mouseenter',titleEnters);
    cattoydiv.addEventListener('mouseleave',titleLeaves);

    function titleEnters(){
      title.classList.add('catnameappear');
      cost.classList.add('catcostappear');
      catbuybtn.classList.add('buyvisible');
      // catwishbtn.classList.add('wishvisible');
      catbtndiv.classList.add('catcostdivvisible');
    }

    function titleLeaves(){
      title.classList.remove('catnameappear');
      cost.classList.remove('catcostappear');
      catbuybtn.classList.remove('buyvisible');
      // catwishbtn.classList.remove('wishvisible');
      catbtndiv.classList.remove('catcostdivvisible');
    }
  });
}
cat2();

//////////////////////////////////////// CheckoutBtn ////////////////////////////////////////////////////////////////////////////

//Selectors
const checkoutbtn=document.getElementById("checkoutbtn")

checkoutbtn.addEventListener("click",()=>{
  location.href="./userproductdetails.html"
})