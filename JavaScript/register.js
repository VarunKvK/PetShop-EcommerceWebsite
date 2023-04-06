
const firstnameinput = document.querySelector(".firstnameinput");
const emailinput = document.querySelector(".emailinput");
const passwords = document.querySelector(".passwordinput");
const cpasswordinput = document.querySelector(".cpasswordinput");
const errormessages = document.querySelector(".errorbodyclass");
const passworderrormessage = document.querySelector(".passwordbodyclass");
const successmessages = document.querySelector(".successbodyclass");
const registerbtn = document.querySelector(".registerbtn");


// EventListener
registerbtn.addEventListener("click", displayed);
errormessages.addEventListener('click',exiterror);
passworderrormessage.addEventListener('click',passwordexiterror);
successmessages.addEventListener('click',exit)

// Function
function displayed(e) {
    var emailvalue=emailinput.value;
    var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (firstnameinput.value == ""&&passwords.value == ""&&emailinput.value=="") {
    e.preventDefault();
    errormessages.classList.add("displaying");
  }
  else if(!email.test(emailvalue)){
    e.preventDefault();
    errormessages.classList.add("displaying");
  }
  else{
    e.preventDefault();
    successmessages.classList.add("displaying");
  }
}



function exit(){
    successmessages.classList.remove("displaying");
}

function exiterror(){
  errormessages.classList.remove("displaying");
}
function passwordexiterror(){
    passworderrormessage.classList.remove("displaying");
}


