/*eslint-env browser*/

var buttons = ["zero","one","two","three","four","five","six","seven","eight","nine","multiply","divide","add","subtract","equal","period"];

window.addEventListener("load", init, false);

function init() {
    "use strict";

    var $ = function (id) {
    "use strict";
      return window.document.getElementById(id);
    };

   window.console.log($("one").value);
   window.console.log($("two").value);

   one.addEventListener("click", function () {			window.alert("You pressed " + $("one").value);
     }, false);

   two.addEventListener("click", function () {			window.alert("You pressed " + $("two").value);
     }, false);

   three.addEventListener("click", function () {			window.alert("You pressed " + $("three").value);
     }, false);
}
/* Testing Git connection */
