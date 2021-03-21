//getting the map's height
function loadMarkers() {
    setTimeout(function () { 
        var h = Number(document.getElementById("worldMap").style.height); 
        console.log(h); 
    }, 5000)
}

/*-----------------------*/
/* var h = document.getElementById("worldMap").style.height;
    console.log(document.getElementById("worldMap"));
    console.log(h);


//set position for ru marker
var ruTop = "";
var ruMarker = document.getElementById("ruMarker");
ruTop = -2.35*h;
ruMarker.style.top = ruTop + "px";
ruMarker.style.left = "67%";

//set position for us marker
var usTop = "";
var usMarker = document.getElementById("usMarker");
usTop = -1.72*h;
usMarker.style.top = usTop + "px";
usMarker.style.left = "17%";

//set position for uk marker
var ukTop = "";
var ukMarker = document.getElementById("ukMarker");
ukTop = -1.875*h;
ukMarker.style.top = ukTop + "px";
ukMarker.style.left = "40.7%";

//set position for br marker
var brTop = "";
var brMarker = document.getElementById("brMarker");
brTop = -0.93*h;
brMarker.style.top = brTop + "px";
brMarker.style.left = "25%";

//set position for il marker
var ilTop = "";
var ilMarker = document.getElementById("ilMarker");
ilTop = -1.53*h;
ilMarker.style.top = ilTop + "px";
ilMarker.style.left = "45.1%";
*/
/*-----------------------*/
/*
//set position for ru title
var topru = "";
var rutxt = document.getElementById("rutxt");
topru = -2.4*h;
rutxt.style.top = topru + "px";
rutxt.style.left = "65.8%";
//console.log(topru);

//set position for us title
var topus = "";
var ustxt = document.getElementById("ustxt");
topus = -1.95*h;
ustxt.style.top = topus + "px";
ustxt.style.left = "16.7%";

//set position for uk title
var topuk = "";
var uktxt = document.getElementById("uktxt");
topuk = -2.3*h;
uktxt.style.top = topuk + "px";
uktxt.style.left = "42%";

//set position for br title
var topbr = "";
var brtxt = document.getElementById("brtxt");
topbr = -1.5*h;
brtxt.style.top = topbr + "px";
brtxt.style.left = "31.7%";

//set position for il title
var topil = "";
var iltxt = document.getElementById("iltxt");
topil = -2.3*h;
iltxt.style.top = topil + "px";
iltxt.style.left = "54.7%";
*/