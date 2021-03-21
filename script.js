// == As long as values are the same then the statement is true     
// === Value and Type have to match in order for the statement to be true. 
//  Divs created in the HTML also need to be added into JS

var wrapper=document.body.querySelector(".wrapper");
var fire=document.body.querySelector(".fire");
var ice=document.body.querySelector(".ice");
var poison=document.body.querySelector(".poison");
var damagelevel=document.body.querySelector(".damagelevel");
var dragondamage=0;

fire.addEventListener("click",function(){
strike(dragondamage);
})
ice.addEventListener("click",function(){
strike(dragondamage);
})
poison.addEventListener("click",function(){
strike(dragondamage);
})

function strike(damage,type){
if (type=="fire"){
dragondamage=dragondamage + (damage-1);
  damagelevel.innerHTML= "Dragon Damage: "+ dragondamage;
}else if (type="ice"){
dragondamage=dragondamage+ (damage+1);
  damagelevel.innerHTML= "Dragon Damage: "+ dragondamage;
}if (type=="poison"){
dragondamage=dragondamage+damage;
  damagelevel.innerHTML= "Dragon Damage: "+ dragondamage;
 }
}
damagelevel.innerHTML= "Dragon Damage: "+ dragondamage;

if(dragondamage>=10){
wrapper.innerHTML="You've Won! Congratulations!";
}