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

/* JS CALC */

// wyszukujemy elementy w html
// strzalki do rozwijania
var listArrow1 = document.querySelectorAll('.list_arrow')[0];
var listArrow2 = document.querySelectorAll('.list_arrow')[1];
var listArrow3 = document.querySelectorAll('.list_arrow')[2];
// ukryte pierwotnie boxy z opcjami
var listPanel1 = document.querySelectorAll('.list_panel')[0];
var listPanel2 = document.querySelectorAll('.list_panel')[1];
var listPanel3 = document.querySelectorAll('.list_panel')[2];
// opcje z boxow
// model
var clair = document.querySelector('.Clair');
var margarita = document.querySelector('.Margarita');
var selena = document.querySelector('.Selena');
// kolor 
var red = document.querySelector('.red');
var black = document.querySelector('.black');
var orange = document.querySelector('.orange');
// poszycie
var fabric = document.querySelector('.fabric');
var leather = document.querySelector('.leather');
// transport
var transport = document.querySelector('input[type=checkbox]');
    
    
// elementy wybrane
var selectedModel = document.querySelector('.title');
var selectedColor = document.querySelector('.color');
var selectedFabric = document.querySelector('.pattern');
var selectedTransport = document.querySelector('.transport');
// ich cena
var selectedModelPrice = document.querySelector('.title2');
var selectedColorPrice = document.querySelector('.color2');
var selectedFabricPrice = document.querySelector('.pattern2');
var selectedTransportPrice = document.querySelector('.transport2');
// suma
var sum = document.querySelector('.sum');

var price = price_model + price_color + price_pattern + price_transport;

var price_model = 0;
var price_color =0;
var price_pattern = 0;
var price_transport =0;
    
    
// ustawione czuwanie na klikniecie trojkata i naprzemienne ustawianie display(none / block)
listArrow1.addEventListener('click', function(chooseType){
    listPanel1.style.display = ((listPanel1.style.display!='none') ? 'none' : 'block');
});

listArrow2.addEventListener('click', function(chooseType){
    listPanel2.style.display = ((listPanel2.style.display!='none') ? 'none' : 'block');
});
    
listArrow3.addEventListener('click', function(chooseType){
    listPanel3.style.display = ((listPanel3.style.display!='none') ? 'none' : 'block');
});
// wybór modelu i wpisanie go po prawo wraz z cena
clair.addEventListener('click', function(model){
    selectedModel.innerText = "Clair";
    selectedModelPrice.innerText = 549;
    listPanel1.style.display = "none";
    price_model = 549;
    price = price_model + price_color + price_pattern + price_transport;
    sum.innerText = price;
});
    
margarita.addEventListener('click', function(model){
    selectedModel.innerText = "Margarita";
    selectedModelPrice.innerText = 649;
    listPanel1.style.display = "none";
    price_model = 649;
    price = price_model + price_color + price_pattern + price_transport;
    sum.innerText = price;
});
    
selena.addEventListener('click', function(model){
    selectedModel.innerText = "Selena";
    selectedModelPrice.innerText = 719;
    listPanel1.style.display = "none";
    price_model = 719;
    price = price_model + price_color + price_pattern + price_transport;
    sum.innerText = price;
});
// wybor koloru
red.addEventListener('click', function(color){
    selectedColor.innerText = "czerwony";
    selectedColorPrice.innerText = 99;
    listPanel2.style.display = "none";
    price_color = 99;
    price = price_model + price_color + price_pattern + price_transport;
    sum.innerText = price;
});
    
black.addEventListener('click', function(color){
    selectedColor.innerText = "czarny";
    selectedColorPrice.innerText = 19;
    listPanel2.style.display = "none";
    price_color = 19;
    price = price_model + price_color + price_pattern + price_transport;
    sum.innerText = price;
});

orange.addEventListener('click', function(color){
    selectedColor.innerText = "pomarańczowy";
    selectedColorPrice.innerText = 19;
    listPanel2.style.display = "none";
    price_color = 19;
    price = price_model + price_color + price_pattern + price_transport;
    sum.innerText = price;
});

// wybor materialu
fabric.addEventListener('click', function(material){
    selectedFabric.innerText = "tkanina";
    selectedFabricPrice.innerText = 99;
    listPanel3.style.display = "none";
    price_pattern = 99;
    price = price_model + price_color + price_pattern + price_transport;
    sum.innerText = price;
});
    
leather.addEventListener('click', function(material){
    selectedFabric.innerText = "skóra";
    selectedFabricPrice.innerText = 299;
    listPanel3.style.display = "none";
    price_pattern = 299;
    price = price_model + price_color + price_pattern + price_transport;
    sum.innerText = price;
});

//transport

transport.addEventListener('change', function(){
    if (transport.checked == true) {
        selectedTransport.innerText = "transport";
        selectedTransportPrice.innerText = 50;
        price_transport = 50;
        price = price_model + price_color + price_pattern + price_transport;
        sum.innerText = price;
    } else {
        selectedTransport.innerText = "";
        selectedTransportPrice.innerText = "";
    }
});
    
    
   
}); // very last section of DOMContentLoaded