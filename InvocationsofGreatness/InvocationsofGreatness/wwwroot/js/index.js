$(document).ready(function() {

    console.log("Hello World!");
    var $loginToggle = $("#loginToggle")
    var $popupForm = $(".popupForm")
    $loginToggle.on("click", function() {
        $popupForm.toggle();
    });
    
    
    let $wexLeft = $("#wex_orb_left");
    let $exortLeft = $("#exort_orb_left");
    let $quasLeft = $("#quas_orb_left");
    let $wexTop = $("#wex_orb_top");
    let $exortTop = $("#exort_orb_top");
    let $quasTop = $("#quas_orb_top");
    let $quasRight = $("#quas_orb_right");
    let $wexRight = $("#wex_orb_right");
    let $exortRight = $("#exort_orb_right");
    let $orbOne = $("#orbOne");
    let $orbTwo = $("#orbTwo");
    let $orbThree = $("#orbThree");
    

    $("#quas").click(function() {
        $wexRight.css("opacity", "0");
        $exortRight.css("opacity", "0");
        $quasRight.css("opacity", "0");
        $wexRight.css("opacity", $wexTop.css("opacity"));
        $exortRight.css("opacity", $exortTop.css("opacity"));
        $quasRight.css("opacity", $quasTop.css("opacity"));
        $wexTop.css("opacity", "0");
        $exortTop.css("opacity", "0");
        $quasTop.css("opacity", "0");
        $wexTop.css("opacity", $wexLeft.css("opacity"));
        $exortTop.css("opacity", $exortLeft.css("opacity"));
        $quasTop.css("opacity", $quasLeft.css("opacity"));

        $wexLeft.css("opacity", "0");
        $exortLeft.css("opacity", "0");
        $quasLeft.css("opacity", "1");
        $orbThree.val($("#orbTwo").val());
        $orbTwo.val($("#orbOne").val());
        $orbOne.val("1");
        
        

        //if ($quasLeft.css("opacity") !== "1") {
        //    $wexTop.css("opacity", $wexLeft.css("opacity"));
        //    $exortTop.css("opacity", $exortLeft.css("opacity"));
        //    $wexRight.css("opacity", $wexTop.css("opacity"));
        //    $exortRight.css("opacity", $exortTop.css("opacity"));
        //    $quasTop.css("opacity", $quasLeft.css("opacity"));
        //    $quasRight.css("opacity", $quasTop.css("opacity"));
        //    $wexLeft.css("opacity", "0");
        //    $exortLeft.css("opacity", "0");
        //    $quasLeft.css("opacity", "1");
        //}

        //else if ($quasLeft.css("opacity") === "1") {
        //    $wexRight.css("opacity", "0");
        //    $exortRight.css("opacity", "0");
        //    $quasRight.css("opacity", "0");
        //    $wexRight.css("opacity", $wexTop.css("opacity"));
        //    $exortRight.css("opacity", $exortTop.css("opacity"));
        //    $quasRight.css("opacity", $quasTop.css("opacity"));
        //    $wexTop.css("opacity", "0");
        //    $exortTop.css("opacity", "0");
        //    $quasTop.css("opacity", "0");
        //    $wexTop.css("opacity", $wexLeft.css("opacity"));
        //    $exortTop.css("opacity", $exortLeft.css("opacity"));
        //    $quasTop.css("opacity", $quasLeft.css("opacity"));
            
        //    $wexLeft.css("opacity", "0");
        //    $exortLeft.css("opacity", "0");
        //    $quasLeft.css("opacity", "1");

        //}
        
    });
    $("#wex").click(function() {
        
        $wexRight.css("opacity", "0");
        $exortRight.css("opacity", "0");
        $quasRight.css("opacity", "0");
        $wexRight.css("opacity", $wexTop.css("opacity"));
        $exortRight.css("opacity", $exortTop.css("opacity"));
        $quasRight.css("opacity", $quasTop.css("opacity"));
        $wexTop.css("opacity", "0");
        $exortTop.css("opacity", "0");
        $quasTop.css("opacity", "0");
        $wexTop.css("opacity", $wexLeft.css("opacity"));
        $exortTop.css("opacity", $exortLeft.css("opacity"));
        $quasTop.css("opacity", $quasLeft.css("opacity"));

        $wexLeft.css("opacity", "1");
        $exortLeft.css("opacity", "0");
        $quasLeft.css("opacity", "0");
        $orbThree.val($("#orbTwo").val());
        $orbTwo.val($("#orbOne").val());
        $orbOne.val("2");

        //else if ($wexLeft.css("opacity") === "1") {
        //    $wexRight.css("opacity", "0");
        //    $exortRight.css("opacity", "0");
        //    $quasRight.css("opacity", "0");
        //    $wexRight.css("opacity", $wexTop.css("opacity"));
        //    $exortRight.css("opacity", $exortTop.css("opacity"));
        //    $quasRight.css("opacity", $quasTop.css("opacity"));
        //    $wexTop.css("opacity", "0");
        //    $exortTop.css("opacity", "0");
        //    $quasTop.css("opacity", "0");
        //    $wexTop.css("opacity", $wexLeft.css("opacity"));
        //    $exortTop.css("opacity", $exortLeft.css("opacity"));
        //    $quasTop.css("opacity", $quasLeft.css("opacity"));

        //    $wexLeft.css("opacity", "1");
        //    $exortLeft.css("opacity", "0");
        //    $quasLeft.css("opacity", "0");

        //}

    });
    $("#exort").click(function() {

        $wexRight.css("opacity", "0");
        $exortRight.css("opacity", "0");
        $quasRight.css("opacity", "0");
        $wexRight.css("opacity", $wexTop.css("opacity"));
        $exortRight.css("opacity", $exortTop.css("opacity"));
        $quasRight.css("opacity", $quasTop.css("opacity"));
        $wexTop.css("opacity", "0");
        $exortTop.css("opacity", "0");
        $quasTop.css("opacity", "0");
        $wexTop.css("opacity", $wexLeft.css("opacity"));
        $exortTop.css("opacity", $exortLeft.css("opacity"));
        $quasTop.css("opacity", $quasLeft.css("opacity"));

        $wexLeft.css("opacity", "0");
        $exortLeft.css("opacity", "1");
        $quasLeft.css("opacity", "0");
        $orbThree.val($("#orbTwo").val());
        $orbTwo.val($("#orbOne").val());
        $orbOne.val("3");
        console.log($orbOne.css("id"));
    });   



            //else if ($quasTop.css("opacity") === "1") {

            //    $wexRight.css("opacity", "0");
            //    $exortRight.css("opacity", "0");
            //    $quasRight.css("opacity", quasOpacity);

            //     if ($quasLeft.css("opacity") === "0") {
            //         $wexLeft.css("opacity", "0");
            //         $exortLeft.css("opacity", "0");
            //         $quasLeft.css("opacity", quasOpacity);
            //     }

            //}

            //else {
            //    $("#quas_orb_left").css("opacity", quasOpacity);
            //}

    
    
});
