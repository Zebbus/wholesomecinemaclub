// Variables
var font;
var site = document.getElementsByTagName('body')[0];
var lights = document.getElementById('lights');
var dark = document.getElementById('darkmode');
var light = document.getElementById('lightmode');
var logo = document.getElementById('logo')
var homeNav = document.getElementById('home-nav');
var workNav = document.getElementById('work-nav');
var friendsNav = document.getElementById('friends-nav');
var foodNav = document.getElementById('food-nav');
var home = document.getElementById('home');
var work = document.getElementById('work');
var friends = document.getElementById('friends');
var food = document.getElementById('food');
var hour = new Date().getHours();

// Functions

function hide(bye){
    bye.style.display = 'none';
}

function show(hi){
    hi.style.display = '';
}

function pickFont(){
    fonts = ['Aladin','Amatic SC','Bebas Neue', 'Courier' ,'Creepster','Georgia','Limelight','Poppins', 'Rubik Glitch', 'Special Elite','Staatliches']
    const random = Math.floor(Math.random() * fonts.length);
    return fonts[random];
};

function pickTitle(){
    titles = ['whole','some','cinema','club']
    const random = Math.floor(Math.random() * titles.length);
    return titles[random];
};

function changeFont(){
    document.getElementById(pickTitle()).style.fontFamily = font;
};

function setAll(){
    font = pickFont();
    console.log(font)
    for (let e of document.getElementsByClassName("logo")) { e.style.fontFamily = font; }
};

function menu(option){
    for(var e of document.getElementsByClassName('content')) {e.style.display = 'none';}
        show(option);
    if(option.id === 'home'){
        hide(homeNav);
    }
    else {
        show(homeNav);
    }
}

function darkMode(){
    if(site.classList.contains('darkmode')){
        site.style.transition = 'all 1s';
        site.classList.remove("darkmode");
        hide(light);
        show(dark);
        localStorage.setItem("darkmode", false);     
    }
    else {
        site.style.transition = 'all 1s';
        site.classList.add("darkmode");
        hide(dark);
        show(light);
        localStorage.setItem("darkmode", true); 
    }
};

(function switchUpAll(){
    rand = Math.round(Math.random()*(5000-1000))+1000;
    setTimeout(function() {
        setAll();
        switchUpAll();  
    }, rand);
}());

// On clicks

workNav.onclick = function() {menu(work)}

friendsNav.onclick = function() {menu(friends)}

foodNav.onclick = function() {menu(food)};

homeNav.onclick = function() {menu(home)};

logo.onclick = function() {menu(home)};

lights.onclick = function(){darkMode()};

// Darkmode if stored or night time
if(localStorage.darkmode === 'true'|| hour >= 22 || hour <= 7){
    site.classList.add("darkmode");
    hide(dark);
    show(light);
}
else{
    hide(light);
    show(dark);
};