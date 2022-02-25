// random num from 1 to 6
function d6() {
    r = Math.floor(Math.random()*6)
    return r+1
}

// initialize rolled dice
let d1 = 0;
let d2 = 0;

// shows result of throwing die & disables 'Show'-button
function roll_dice() {
    $("#show").prop("disabled", true);
    $("#roll").prop("disabled", true);
    d1 = d6();
    d2 = d6();
    $("#result").html(String(d1)+" "+String(d2));
    lie_or_not();
}

// reveals dice and ends round
function show_dice() {
    $("#show").addClass("hidden").prop("disabled", true);
    $("#roll").addClass("hidden");
    if (final_bool) {
        $(".end_of_round").html("You lose!");
    }
    else {
        $(".end_of_round").html("You win!");
    }
    $(".new_game_btn").removeClass("hidden");
}

// shows two (hidden) buttons to decide for or against lying
function lie_or_not() {
    $("[name='option']").removeClass("hidden");
}

// shows input
function lie() {
    $("[name='lie']").removeClass("hidden");
    $("[name='final_option']").removeClass("hidden");
    $("[name='option']").addClass("hidden")
}

let lie1=0;
let lie2=0;
$(document).on('click', '.dropdown-content > button', function (){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).parent().attr('id')  === "lie1"){
        lie1 = $(this).html();
    }
    else {
        lie2 = $(this).html();
    }
    if (lie1 != 0) {
        $("#l1").html(String(lie1));
    }
    if (lie2 != 0) {
        $("#l2").html(String(lie2));
    }
})

function end_truth(){
    // reset nums of dropdown and active class
    $("#l1").html("Die 1");
    $("#l2").html("Die 2");
    $(".dropdown-content").children().removeClass('active');

    end(true,d1,d2)
    lie1 = 0;
    lie2 = 0;
}

function end_lie(){
    // reset nums of dropdown and active class
    $("#l1").html("Die 1");
    $("#l2").html("Die 2");
    $(".dropdown-content").children().removeClass('active');

    end(false,lie1,lie2);
    lie1 = 0;
    lie2 = 0;
}

let final_bool = true;

// reset round (dependent on lie or truth choice)
function end(bool,final_d1,final_d2){
    console.log(bool,final_d1,final_d2);
    $("#show").prop("disabled", false);
    $("#roll").prop("disabled", false);
    $("#result").html("");
    if (bool) {
        final_bool = true;
        $("[name='option']").addClass("hidden");
        $("[name='lie']").addClass("hidden");
        $("[name='final_option']").addClass("hidden");
    }
    else {
        final_bool = false;
        $("[name='lie']").addClass("hidden");
        $("[name='final_option']").addClass("hidden");
    }
}

function new_game() {
    location.reload();
}