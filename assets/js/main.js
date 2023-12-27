// Variables
var font;
var site = document.getElementsByTagName('body')[0];
var lights = document.getElementById('lights');
var dark = document.getElementById('darkmode');
var light = document.getElementById('lightmode');
var hour = new Date().getHours();

// Functions

function hide(bye){
    bye.style.display = 'none';
}

function show(hi){
    hi.style.display = '';
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


// On clicks

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