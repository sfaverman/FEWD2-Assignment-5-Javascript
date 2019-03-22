/*eslint-env browser*/
//PART 1 LISTEN to EVERY BUTTON
/*
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", init, false);

function init() {
    "use strict";
    $("zero").addEventListener("click", function(){enter("zero")}, false);
    $("one").addEventListener("click", function(){enter("one")}, false);
    $("two").addEventListener("click", function(){enter("two")}, false);
    $("three").addEventListener("click", function(){enter("three")}, false);
    $("four").addEventListener("click", function(){enter("four")}, false);
    $("five").addEventListener("click", function(){enter("five")}, false);
    $("six").addEventListener("click", function(){enter("six")}, false);
    $("seven").addEventListener("click", function(){enter("seven")}, false);
    $("eight").addEventListener("click", function(){enter("eight")}, false);
    $("nine").addEventListener("click", function(){enter("nine")}, false);
    $("add").addEventListener("click", function(){enter("add")}, false);
    $("subtract").addEventListener("click", function(){enter("subtract")}, false);
    $("multiply").addEventListener("click", function(){enter("multiply")}, false);
    $("divide").addEventListener("click", function(){enter("divide")}, false);
    $("period").addEventListener("click", function(){enter("period")}, false);

  	$("equal").addEventListener("click", calculate, false);

}  // end of init

function enter (btn) {
     $("result").value += $(btn).value;
}

function calculate () {
	 $("result").value = eval($("result").value);
}
*/
//PART 2 LISTEN TO PARRENT ELEMENT

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", init, false);

function init() {
    "use strict";
    $("calculator").addEventListener("click", function(e){
        /*console.log(e.target);
        console.log(e.target.value);*/
        if (e.target.value !== "=") {
            $("result").value += e.target.value;
        } else {
            $("result").value = eval($("result").value);
        }

    }, false);

}  // end of init

