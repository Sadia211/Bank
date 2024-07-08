
//add event handler with the submit button

document.getElementById('btn-submit').addEventListener('click' ,function(){
    //get the emaiaddress and use .value to get the text from input field
const emailfield=document.getElementById('useremail');
const email=emailfield.value;

const passwordfield=document.getElementById('password');
const password=passwordfield.value;

console.log(email,password);
if(email=="sadia@gmail.com" && password=="1234")

window.location.href='bank.html';//to go to bank.html page

else{alert('invalid user');}

})