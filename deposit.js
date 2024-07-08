document.getElementById('btn-deposit').addEventListener('click', function(){
//takeinput fromthe deposit field
const depositfield=document.getElementById('deposit-field')
const newdepositamountString=depositfield.value;
//converting the string to float
const newdepositamount=parseFloat(newdepositamountString);

//get the current deposit total
const deposittotalelement=document.getElementById('deposit-total');


const previousdeposittotalString=deposittotalelement.innerText;
const previousdeposittotal=parseFloat(previousdeposittotalString);


const currentdeposittotal=previousdeposittotal+newdepositamount;
deposittotalelement.innerText=currentdeposittotal;


const balancetotalelement=document.getElementById("balance-total");
const previousbalancetotalString=balancetotalelement.innerText;
const previousbalancetotal=parseFloat(previousbalancetotalString);
const currentbalancetotal=previousbalancetotal+newdepositamount;
balancetotalelement.innerHTML=currentbalancetotal;

//clear the deposit field
depositfield.value=" ";

})