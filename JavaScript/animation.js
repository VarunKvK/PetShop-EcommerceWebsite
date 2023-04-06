// Firstpage
function animationDogPage() {

  var t1 = gsap.timeline();

  t1.from(".link-container", 1.5, { y: -100 })
    .from(".inputcontainer", 1.5, { y: -100 }, "-=1.5")
    .from(".menu", 1.5, { y: -100, stagger: 10 }, "-=1")
    .from(".links", 1.5, { y: -80, stagger: 10 }, "-=1")
    .from(".searchcontainer", 1.5, { y: -100, stagger: 10 }, "-=1")
    .from(".user-container", 1.5, { y: -100, stagger: 10 }, "-=1")
    .from(".image-container", 1.5, { y: 700, stagger: 10 }, "-=1")
    .from(".golden-dog", 1.5, { y: 750 }, "-=1")
    .from(".circle", 1.5, { scale: 0 }, "-=1");
}


window.onload=animationDogPage;