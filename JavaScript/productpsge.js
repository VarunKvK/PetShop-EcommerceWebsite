const dogtoys = document.querySelector(".carousel-item");
const dogtoys2 = document.getElementById("dogdata2");
const next= document.getElementById("next");
const nextbtn=document.querySelector(".carousel-control-next");

const data = [
    {
      id: 01,
      title: "Idept Dog Toy Ball",
      cost: 300,
      img: `https://m.media-amazon.com/images/I/61yNZsTkbiL._AC_SY355_.jpg`,
      link: `../ProductPage/Ball.html`,
      class:'ball'
    },
    {
      id: 02,
      title: "Mad Scientist",
      cost: 2025,
      img: `https://m.media-amazon.com/images/I/61RH4Igl-bL._SY606_.jpg`,
      link: `../ProductPage/Scientist.html`,
      class:'treat'
    },
    {
      id: 03,
      title: "Solve Treats",
      cost: 1750,
      img: `https://m.media-amazon.com/images/I/81f0nZ921HL._SX425_.jpg`,
      link: `../ProductPage/Treats.html`,
      class:'bowl',
    },
  ];

  const data2 = [
    {
      id: 04,
      title: "Rubber Suction CupBite",
      cost: 1700,
      img: `https://images-eu.ssl-images-amazon.com/images/I/4166HiBkM1L._SY300_SX300_QL70_FMwebp_.jpg`,
      link: `../ProductPage/Suction.html`,
      class:'cup'
    },
    {
      id: 05,
      title: "Tails Zoozies Crocodile",
      cost: 150,
      img: `https://m.media-amazon.com/images/I/71XwvVLXVHL._SX425_.jpg`,
      link: `../ProductPage/Croc.html`,
      class:'croc'
  
    },
    {
      id: 06,
      title: "UC Evolution Rugby Ball",
      cost: 150,
      img: `https://m.media-amazon.com/images/I/51Mp2g2zw4L._SX522_.jpg`,
      link: `../ProductPage/Rugby.html`,
      class:'rugby',
    },]

    function dog() {
        data.map((dogdata) => {
          // DataDog
      
          const dogtoydiv = document.createElement("div");
          dogtoydiv.setAttribute("class",dogdata.class);
          dogtoys.appendChild(dogtoydiv);
        
          const title=document.createElement('h1');
          title.innerHTML=dogdata.title;
          title.classList.add("dogproductname");
          dogtoydiv.appendChild(title);
          
          const cost=document.createElement('h2');
          cost.innerHTML='&#8377 '+dogdata.cost;
          cost.classList.add("dogcost");
          dogtoydiv.appendChild(cost);
      
          const dogtoyimage = document.createElement("img");
          dogtoyimage.src = dogdata.img;
          dogtoyimage.classList.add("dogtoyimage");
          dogtoydiv.appendChild(dogtoyimage);
      
          const dogbtndiv=document.createElement('div');
          dogbtndiv.classList.add("dogcostdiv");
          dogtoydiv.appendChild(dogbtndiv);
      
          const doglink=document.createElement('a')
          doglink.href=dogdata.link;
          dogbtndiv.appendChild(doglink);
          
          const dogbuybtn=document.createElement('button');
          dogbuybtn.classList.add("buyproductbtn");
          dogbuybtn.textContent='View';
          doglink.appendChild(dogbuybtn);
          
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
            dogwishbtn.classList.add('wishvisible');
            dogbtndiv.classList.add('dogcostdivvisible');
          }
      
          function titleLeaves(){
            title.classList.remove('dognameappear');
            cost.classList.remove('dogcostappear');
            dogbuybtn.classList.remove('buyvisible');
            dogwishbtn.classList.remove('wishvisible');
            dogbtndiv.classList.remove('dogcostdivvisible');
          }
        });
      }
      dog();
      function dog2() {
        data2.map((dogdata2) => {
          // DataDog
      
      
          const dogtoydiv = document.createElement("div");
          dogtoydiv.setAttribute("class",dogdata2.class);
          dogtoys2.appendChild(dogtoydiv);
        
          const title=document.createElement('h1');
          title.innerHTML=dogdata2.title;
          title.classList.add("dogproductname");
          dogtoydiv.appendChild(title);
          
          const cost=document.createElement('h2');
          cost.innerHTML='&#8377 '+dogdata2.cost;
          cost.classList.add("dogcost");
          dogtoydiv.appendChild(cost);
      
          const dogtoyimage = document.createElement("img");
          dogtoyimage.src = dogdata2.img;
          dogtoyimage.classList.add("dogtoyimage");
          dogtoydiv.appendChild(dogtoyimage);
      
          const dogbtndiv=document.createElement('div');
          dogbtndiv.classList.add("dogcostdiv");
          dogtoydiv.appendChild(dogbtndiv);
      
          const doglink=document.createElement('a')
          doglink.href=dogdata2.link;
          dogbtndiv.appendChild(doglink);

          const dogbuybtn=document.createElement('button');
          dogbuybtn.classList.add("buyproductbtn");
          dogbuybtn.textContent='View';
          doglink.appendChild(dogbuybtn);
          
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
            dogwishbtn.classList.add('wishvisible');
            dogbtndiv.classList.add('dogcostdivvisible')
          }
      
          function titleLeaves(){
            title.classList.remove('dognameappear');
            cost.classList.remove('dogcostappear');
            dogbuybtn.classList.remove('buyvisible');
            dogwishbtn.classList.remove('wishvisible');
            dogbtndiv.classList.remove('dogcostdivvisible')
          }
        });
      }
      dog2(); 