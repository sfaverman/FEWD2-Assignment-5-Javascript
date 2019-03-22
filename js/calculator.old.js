/*eslint-env browser*/

var buttons = ["zero","one","two","three","four","five","six","seven","eight","nine","multiply","divide","add","subtract","equal","period"];

 var $ = function (id) {
    "use strict";
      return window.document.getElementById(id);
    };

/*window.console.log($("one").value);*/

function enter(btn) {
    window.alert("You pressed " + $(btn).value);
}

window.addEventListener("load", init, false);

function init() {
    "use strict";

   $('zero').addEventListener("click", enter('zero'));
   $('one').addEventListener("click", enter('one'));
   two.addEventListener("click", enter('two'), true);
   three.addEventListener("click", enter('three'), true);
   four.addEventListener("click", enter('four'), false);
   five.addEventListener("click", enter('five'), false);
   six.addEventListener("click", enter('six'), false);
   seven.addEventListener("click", enter('seven'), false);
   eight.addEventListener("click", enter('eight'), false);
   nine.addEventListener("click", enter('nine'), false);
   multiply.addEventListener("click", enter('multiply'), false);
   divide.addEventListener("click", enter('divide'), false);
   add.addEventListener("click", enter('add'), false);
   subtract.addEventListener("click", enter('subtract'), false);
   period.addEventListener("click", enter('period'), false);
   equal.addEventListener("click", enter('equal'), false);

} // end of function init


