const edit = document.getElementById("edit");
const cancel = document.querySelector(".cancel");
const inserted = document.querySelector(".inserted");
const deletebtn = document.getElementById("delete");
const insert = document.querySelector(".insertinfo");
const messsagesuccessdiv = document.querySelector(".messsagesuccessdiv");
const formaterrordiv = document.querySelector(".formaterrordiv");
const fillerrordiv = document.querySelector(".fillerrordiv");
const insertinfo = document.querySelector(".insertinfo");
const nameinput = document.querySelector(".nameinput");
const emailinput = document.querySelector(".emailinput");
const addressinput = document.querySelector(".addressinput");

edit.addEventListener("click", openDialog);
cancel.addEventListener("click", closeDialog);
cancel.addEventListener("click", validation);
inserted.addEventListener("click", validation);
deletebtn.addEventListener("click", validation);

function openDialog() {
  insert.classList.add("insertinfoanimate");
}
function closeDialog() {
  if (emailinput.value == "" || nameinput.value == "" || addressinput.value == "") {
    validation;
    console.log(nameinput.value)
  } else {
    window.location.reload();
    insertinfo.classList.remove("insertinfoanimate");
  }
}
function validation(e) {
  console.log("Done");
  var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (nameinput.value == "") {
    e.preventDefault();
    fillerrordiv.classList.add("fillerrordivcomes");
  }
  if (emailinput.value == "") {
    e.preventDefault();
    fillerrordiv.classList.add("fillerrordivcomes");
  } else if (!email.test(emailinput.value)) {
    e.preventDefault();
    formaterrordiv.classList.add("formaterrordivcomes");
  } else if (addressinput.value == "") {
    fillerrordiv.classList.add("fillerrordivcomes");
  } else {
    e.preventDefault();
    messsagesuccessdiv.classList.add("messsagesuccessdivcomes");
  }
}
