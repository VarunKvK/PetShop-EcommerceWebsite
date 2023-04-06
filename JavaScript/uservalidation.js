//Variables

const emailinput = document.querySelector(".emailinput");
const password = document.querySelector(".passwordinput");
const errormessage = document.querySelector(".errorbodyclass");
const successmessage = document.querySelector(".successbodyclass");
const submit = document.querySelector(".submitbtn");
const spinner = document.querySelector(".spinner");
const passworderror = document.getElementById("passworderror");

// EventListener
submit.addEventListener("click", displayed);
errormessage.addEventListener("click", exitingerror);
successmessage.addEventListener("click", exit);
passworderror.addEventListener('click',exitingerror)

// Function
function displayed(e) {
  var emailvalue = emailinput.value;
  var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (emailinput.value == "") {
    e.preventDefault();
    errormessage.classList.add("displaying");
  } else if (!email.test(emailvalue)) {
    e.preventDefault();
    errormessage.classList.add("displaying");
  } else if (password.value == "") {
    passworderror.classList.add("displaying");
  } else {
    e.preventDefault();
  }
}

function exit() {
  successmessage.classList.remove("displaying");
}

function exitingerror() {
  errormessage.classList.remove("displaying");
  passworderror.classList.remove("displaying");
}
