// //////////////////////Selectors//////////////////////

const username=document.querySelector(".usernameinput");
const email=document.querySelector(".emailinput");
const address=document.querySelector(".addressinput");
const fillerrordiv=document.querySelector(".fillerrordiv")
const formaterrordiv=document.querySelector(".formaterrordiv")
const checkit=document.getElementById("checkit")
const order=document.getElementById("order")

// //////////////////////Function//////////////////////

order.addEventListener("click",validate)

function validate(){
  var emailvalue = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

    if(username.value==""||email.value==""||address.value==""){
        fillerrordiv.classList.add("fillerrordivcomes")
    }
    else if(!emailvalue.test(email.value)){
        formaterrordiv.classList.add("formaterrordivcomes")
    }
}

