function loggin(){
let loginEmail=document.getElementById("email").value;
let loginPassword=document.getElementById("pass").value;
if(loginEmail=="kmh" && loginPassword=="30"){
  location.href = "bloodbanklogged.html";
}else{
  document.getElementById("invalid").innerHTML="Incorrect email or password";
  }
return false;
}
function create(){
location.href = "bloodbankcreate.html";
return false;
}
function signup(){
let creatingName=document.getElementById("userName").value;
let creatingEmail=document.getElementById("createEmail").value;
let creatingPassword=document.getElementById("createPass").value;
let rePassword=document.getElementById("againPass").value;
let pattern= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(!pattern.test(creatingEmail)){
document.getElementById("invalid").innerHTML="Enter a valid email-id";
return false;
}
else if(creatingPassword != rePassword){
document.getElementById("invalid").innerHTML="Re-Entered password doesn't match";
return false;
}

}