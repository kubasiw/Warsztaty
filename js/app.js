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
    
// SLIDER

var next = document.querySelector('.arrow_r');
var prev = document.querySelector('.arrow_l');
var slider = document.querySelector('.black_chair ul');
var sliderElements = document.querySelectorAll('.black_chair ul li');
    

//Ustawienie szerokości wszystkich slidów
slider.style.width=(sliderElements.length+1)*470+"px";

//ustawienie początkowe, aby nie było na pierwszym, bo by szarpało animacje itp.
slider.style.left ="0px";
document.querySelector('.black_chair ul li:nth-of-type(1)').classList.add('visible');
    
next.addEventListener('click',function(event){
        
//Przełożenie pierwszego elementu na koniec listy zdjęć
var sliderWraper = document.querySelector('.black_chair ul');
var firstElement = document.querySelector('.black_chair ul li:first-of-type');
sliderWraper.appendChild(firstElement);

//Usunięcie ze wszystkich li klasy visible 
Array.from(document.querySelectorAll('.black_chair ul li')).forEach(function(element){
   element.classList.remove('visible');
});

//Dodanie do aktualnego klasę visible
document.querySelector('.black_chair ul li:nth-of-type(1)').classList.add('visible');
                  
});
    
prev.addEventListener('click',function(event){
    
//Przełożenie pierwszego elementu na koniec listy zdjęć
var sliderWraper = document.querySelector('.black_chair ul');
var firstElement =  document.querySelector('.black_chair ul li:first-of-type');
var lastElement =  document.querySelector('.black_chair ul li:last-of-type');

sliderWraper.insertBefore(lastElement,firstElement);

//Usunięcie ze wszystkich li klasy visible 
Array.from(document.querySelectorAll('.black_chair ul li')).forEach(function(element){
    element.classList.remove('visible');
});

 //Dodanie do aktualnego klasę visible
 document.querySelector('.black_chair ul li:nth-of-type(1)').classList.add('visible');
         
});
    
    
   
}); // very last section of DOMContentLoaded