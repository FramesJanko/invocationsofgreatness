$(document).ready(function () {
    var x = 0;
    var s = "";

    console.log("Hello World");

    var startingMenu = $(".startingMenu li");
    startingMenu.on("click", function () {
        console.log("You clicked on " + $(this).text());
    });
var $loginToggle = $("#loginToggle");
var $popupForm = $(".popupForm");
$loginToggle.on("click", function () {
    $popupForm.toggle();
});
});