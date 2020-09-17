$(document).ready(function () {

    console.log("Hello World!");
    var $loginToggle = $("#loginToggle")
    var $popupForm = $(".popupForm")
    $loginToggle.on("click", function() {
        $popupForm.toggle();
    });
});