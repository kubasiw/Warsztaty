document.addEventListener("DOMContentLoaded", function(event) {
    
// JS dla sekcji z Clair i Margarita
    
var clair = document.querySelector('.clair');
var marg = document.querySelector('.marg');
var transparent1 = document.querySelectorAll('.transparent')[0]; 
var transparent2 = document.querySelectorAll('.transparent')[1];
    
//console.log(clair);
//console.log(marg);
//console.log(transprent1);
//console.log(transparent2);
    
clair.addEventListener('mouseover', function(hide){
    transparent1.style.visibility = "hidden"; 
});

clair.addEventListener('mouseout', function(show){
    transparent1.style.visibility = "visible";
});
    
marg.addEventListener('mouseover', function(hide){
    transparent2.style.visibility = "hidden"; 
});

marg.addEventListener('mouseout', function(show){
    transparent2.style.visibility = "visible";
});
  
// JS dla wysuwanego menu

var oFirmie = document.querySelector('nav > ul > li');
var menu = document.querySelector('.js_menu');
    
console.log(oFirmie);
console.log(menu);

oFirmie.addEventListener('mouseover', function(show){
    menu.style.display = "block";
});

oFirmie.addEventListener('mouseout', function(hide){
    menu.style.display= "none";
})
    
    
    
    
   
}); // very last section of DOMContentLoaded