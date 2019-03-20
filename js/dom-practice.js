/*eslint-env browser*/

//STEP 1
function displayMessage() {
    window.alert("I have been clicked");
}

//STEP 2
// DOM element method
const BTN1 = document.getElementById("btn1");
BTN1.onclick = function () {
    window.alert("I (Button 1) have been clicked");
}

//STEP 3
/* Event Listener Method */

/*btn2.addEventListener("click",displayMessage);*/

//STEP 4

btn2.addEventListener("click", function(){
     window.alert("I (Button 2) have been clicked");
});

//I have used 'defer' parameter in step4

//STEP 5
//without defer parameter, but still being within the head

window.addEventListener("load", init, false);

function init() {
    btn2.addEventListener("click", function () {			window.alert("I (Button 2) have been clicked");
     }, false);
}

//STEP 6

document.getElementById("google").addEventListener("click", function(e){
   e.preventDefault();
   window.alert("You clicked on Google link");
});

//STEP 7

sendIt.addEventListener("click", function(){
     document.getElementById("sendIt").disabled = true;
     window.alert(document.getElementById("textBox").value );
}, false);

//STEP 8

newPage.addEventListener("click", function() {      window.open("newpage.html","","width=300,height=300,left=50,top=50");
}, false);

//STEP 9
var startDisplay;
start.addEventListener("click", function() {
    startDisplay = setInterval(function(){ console.log("Learning Javascript is fun!"); }, 2000);
}, false);

stopIt.addEventListener("click", function() {
    clearInterval(startDisplay);
}, false);

//STEP 10
var mySelect = document.getElementById("menu");

mySelect.onchange = function() {
   window.alert("You selected: " + mySelect.value.toUpperCase());
}
