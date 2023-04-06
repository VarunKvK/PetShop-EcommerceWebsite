const cattoys = document.getElementById("catdata");
const nextbtn2=document.getElementById("nextbutton")
const next2=document.getElementById("next2")
const cattoys2 = document.getElementById("catdata2");

// const nextbtn=document.querySelector(".carousel-control-next")
 
 // CatData
 const catdataone = [
    {
      id: 01,
      title:"Cat Tower",
      cost: 350,
      img: `https://m.media-amazon.com/images/I/31W+NDl2vcS._SY300_SX300_.jpg`,
      link: `../CatProductPages/CatTower.html`,
      class:"tower"
    },
    {
      id: 02,
      title: "Cat Tunnel Toy",
      cost: 525,
      img: `https://m.media-amazon.com/images/I/61aIhdyzsKS._SL1200_.jpg`,
      link: `../CatProductPages/CatTunnel.html`,
      class:"tunnel"
    },
    {
      id: 03,
      title: "Trixie Snack Ball Cat",
      cost: 250,
      img: `https://m.media-amazon.com/images/I/513ZZSfq1wL._SX466_.jpg`,
      link: `../CatProductPages/SnackBall.html`,
      class:"snack"
    },
  ];

//CatArrayDataTwo
const catdatatwo = [
  {
    id: 01,
    title:"Cat Adjustible Bib",
    cost: 550,
    img: `https://ekaks.com/wp-content/uploads/2022/04/QQ_20211019095358.png`,
    link: `../CatProductPages/Bib.html`,
    class:'feeder'
  },
  {
    id: 02,
    title: "Cat Wooden House",
    cost: 1525,
    img: `https://ekaks.com/wp-content/uploads/2022/04/4_3aa1140e-90d3-4419-8923-4c7aaeb11fc7.jpg`,
    link: `../CatProductPages/Wooden.html`,
    class:'wood'
  },
  {
    id: 03,
    title: "Cat House",
    cost: 1350,
    img: `https://ekaks.com/wp-content/uploads/2022/04/04_6c8692c6-cab4-4116-9b8f-62e2a3b76d35.jpg`,
    link: `../CatProductPages/House.html`,
    class:"house"
  },
];

// EventListener
// next2.addEventListener('click',dataDisplay2)
// CatFunction
function cat() {
    catdataone.map((catdata) => {
      // DataCat
  
      const cattoydiv = document.createElement("div");
      cattoydiv.setAttribute("class",catdata.class);
      cattoys.appendChild(cattoydiv);
    
      const title=document.createElement('h1');
      title.innerHTML=catdata.title;
      title.classList.add("catproductname");
      cattoydiv.appendChild(title);
      
      const cost=document.createElement('h2');
      cost.innerHTML='&#8377 '+catdata.cost;
      cost.classList.add("dogcost");
      cattoydiv.appendChild(cost);
  
      const cattoyimage = document.createElement("img");
      cattoyimage.src = catdata.img;
      cattoyimage.classList.add("cattoyimage");
      cattoydiv.appendChild(cattoyimage);
  
      const catbtndiv=document.createElement('div');
      catbtndiv.classList.add("catcostdiv");
      cattoydiv.appendChild(catbtndiv);
  
      const catlink=document.createElement('a')
      catlink.href=catdata.link;
      catbtndiv.appendChild(catlink);
  
      const catbuybtn=document.createElement('button');
      catbuybtn.classList.add("buyproductbtn");
      catbuybtn.textContent='View';
      catlink.appendChild(catbuybtn);
      
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
        catwishbtn.classList.add('wishvisible');
        catbtndiv.classList.add('catcostdivvisible');
      }
  
      function titleLeaves(){
        title.classList.remove('catnameappear');
        cost.classList.remove('catcostappear');
        catbuybtn.classList.remove('buyvisible');
        catwishbtn.classList.remove('wishvisible');
        catbtndiv.classList.remove('catcostdivvisible');
      }
    });
  }
  cat();
  
  function cat2() {
    catdatatwo.map((cattoys) => {
      // DataDog
  
      const cattoydiv = document.createElement("div");
      cattoydiv.setAttribute("class",cattoys.class);
      cattoys2.appendChild(cattoydiv);
    
      const title=document.createElement('h1');
      title.innerHTML=cattoys.title;
      title.classList.add("catproductname");
      cattoydiv.appendChild(title);
      
      const cost=document.createElement('h2');
      cost.innerHTML='&#8377 '+cattoys.cost;
      cost.classList.add("dogcost");
      cattoydiv.appendChild(cost);
  
      const cattoyimage = document.createElement("img");
      cattoyimage.src = cattoys.img;
      cattoyimage.classList.add("cattoyimage");
      cattoydiv.appendChild(cattoyimage);
  
      const catbtndiv=document.createElement('div');
      catbtndiv.classList.add("catcostdiv");
      cattoydiv.appendChild(catbtndiv);
  
      const catlink2=document.createElement('a')
      catlink2.href=cattoys.link;
      catbtndiv.appendChild(catlink2);
  
      const catbuybtn=document.createElement('button');
      catbuybtn.classList.add("buyproductbtn");
      catbuybtn.textContent='View';
      catlink2.appendChild(catbuybtn);
      
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
        catwishbtn.classList.add('wishvisible');
        catbtndiv.classList.add('catcostdivvisible');
      }
  
      function titleLeaves(){
        title.classList.remove('catnameappear');
        cost.classList.remove('catcostappear');
        catbuybtn.classList.remove('buyvisible');
        catwishbtn.classList.remove('wishvisible');
        catbtndiv.classList.remove('catcostdivvisible');
      }
    });
  }
cat2();