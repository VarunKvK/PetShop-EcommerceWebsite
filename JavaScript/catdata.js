//Array data
const catdataone = [
  {
    id: 01,
    title:"Cat Tower",
    cost: 350,
    img: `https://m.media-amazon.com/images/I/31W+NDl2vcS._SY300_SX300_.jpg`,
    link: `./Pages/category.html#catcategory`,
  },
  {
    id: 02,
    title: "Cat Tunnel Toy",
    cost: 525,
    img: `https://m.media-amazon.com/images/I/61aIhdyzsKS._SL1200_.jpg`,
    link: `./Pages/category.html#catcategory`,
  },
  {
    id: 03,
    title: "Trixie Snack Ball Cat",
    cost: 250,
    img: `https://m.media-amazon.com/images/I/513ZZSfq1wL._SX466_.jpg`,
    link: `./Pages/category.html#catcategory`,
  },
];

// //CatArrayDataTwo
// const catdatatwo = [
//   {
//     id: 01,
//     title:"Cat Tower",
//     cost: 350,
//     img: `https://m.media-amazon.com/images/I/31W+NDl2vcS._SY300_SX300_.jpg`,
//     link: ``,
//   },
//   {
//     id: 02,
//     title: "Cat Tunnel Toy",
//     cost: 525,
//     img: `https://m.media-amazon.com/images/I/61aIhdyzsKS._SL1200_.jpg`,
//     link: ``,
//   },
//   {
//     id: 03,
//     title: "Trixie Snack Ball Cat",
//     cost: 250,
//     img: `https://m.media-amazon.com/images/I/513ZZSfq1wL._SX466_.jpg`,
//     link: ``,
//   },
// ];



//Selectors

const catcontent=document.querySelector('.fifthcontent');
const catstuffsheading=document.querySelector('.catstuffsheading');
const catbordercontainer2=document.querySelector('.catbordercontainer2');
const catstuffs=document.querySelector('.catstuffs');
const loadmorebutton=document.querySelector('.loadmore2');
const catstuffcontainer=document.querySelector('.catstuffcontainer');
const footer=document.querySelector('.footer');

//Event Listener
// loadmorebutton.addEventListener('click',displaymoreitems)


//function

// function displaymoreitems(){
//   displaycatitems2();
//   displaycatitems2=function(){};
//   catstuffs.classList.add('catstuffsexpand');
//   catbordercontainer2.classList.add('catbordercontainerextend');
//   loadmorebutton.classList.add('loadmore2visibility');
//   footer.classList.add('footermoves')
// }

//CatOne
function displaycatitems(){
  catdataone.map(element=>{
    //cat container
    const catcontainer=document.createElement('div');
    catcontainer.classList.add('catstuffcontainer');
    catstuffs.appendChild(catcontainer)
    //catimagediv
    const catimage=document.createElement('div')
    catimage.classList.add('catproductimage');
    catcontainer.appendChild(catimage);
    //catimage
    const catproduct=document.createElement('img');
    catproduct.src=element.img;
    catproduct.classList.add('productimage');
    catimage.appendChild(catproduct);
    //cattitle
    const catproducttitle=document.createElement('h1')
    catproducttitle.textContent=element.title;
    catproducttitle.classList.add('catproducttitle')
    catcontainer.appendChild(catproducttitle);

    //catCost
    const catproductcost=document.createElement('h3')
    catproductcost.textContent=element.cost+' Rs';
    catproductcost.classList.add('catproductcost')
    catcontainer.appendChild(catproductcost);
    
    //buybutton
    const catlinkbuy = document.createElement("a");
    catlinkbuy.href = element.link;
    catcontainer.appendChild(catlinkbuy);
    //button
    const buttonbuy = document.createElement("button");
    buttonbuy.classList.add("catbuttonbuystyle");
    buttonbuy.innerHTML = "View";
    catlinkbuy.appendChild(buttonbuy);

    // //wishlistbutton
    // const linkwish = document.createElement("a");
    // catcontainer.appendChild(linkwish);
    //button
    // const buttonwishlist = document.createElement("button");
    // buttonwishlist.classList.add("catbuttonwishstyle");
    // buttonwishlist.innerHTML =
    //   "Wishlist" +
    //   '<span class="iconify" data-icon="icon-park-outline:like"></span>';
    // linkwish.appendChild(buttonwishlist);
  })
}

displaycatitems();


