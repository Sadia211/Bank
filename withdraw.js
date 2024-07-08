
//add event handler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click',function(){

//get the withdraw amount from the withdraw input field
const withdrawfield=document.getElementById('withdraw-field');
const newWithdrawAmountString=withdrawfield.value;
const newWithdrawAmount=parseFloat(newWithdrawAmountString);

//get previuos withdraw total
const withdrawtotalamount=document.getElementById('withdraw-total');
const previouswithdrawtotalString=withdrawtotalamount.innerText;
const previouswithdrawtotal=parseFloat(previouswithdrawtotalString);

//calculate total withdraw amount
const currentwithdrawtotal=previouswithdrawtotal+newWithdrawAmount;
withdrawtotalamount.innerText=currentwithdrawtotal;

//calculate new balance total
const balancetotalelement=document.getElementById('balance-total');
const previousbalancetotalString=balancetotalelement.innerText;
const previousbalancetotal=parseFloat(previousbalancetotalString);

//set the newbaance total
const newbalancetotal=previousbalancetotal-newWithdrawAmount;
balancetotalelement.innerText=newbalancetotal;


withdrawfield.value="";



})