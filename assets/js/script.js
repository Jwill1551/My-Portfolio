//Button types bellow
$(document).ready(function(){
    $("#day-btn, #large-btn, #small-btn").hide();
})

//night and day mode 
$("#night-btn").click(function(){
    $("#day-btn").show();
    $("#night-btn").hide();
    $("body").css("backgroundColor", "rgb(63, 63, 63)");
    $(".template").css("boxShadow", "none");
    $(".template").css("background-color", "rgb(46, 51, 51)");
    $("nav").css("background-color", "rgb(46, 51, 51)");
    $("nav").css("boxShadow", "none");
    $("p").css("color", "white");
    $(".details").css("background-color", "rgb(63, 63, 63)");
    $(".pro-title").css("color", "white");
    $(".head-title").css("background-color", "rgb(63, 63, 63)");
    $("#introduction").css("background-color", "rgb(63, 63, 63)");
    $("#nav-color-bar").css("background-color", "rgb(22, 158, 255)");
})

$("#day-btn").click(function(){
    $("#night-btn").show();
    $("#day-btn").hide();
    $("body").css("backgroundColor", "rgb(235, 235, 235)");
    $(".template").css("boxShadow", "none");
    $(".template").css("background-color", "white");
    $("nav").css("boxShadow", "rgb(228, 223, 223)");
    $("nav").css("boxShadow", "none");
    $("p").css("color", "darkslategray");
    $(".details").css("background-color", "rgb(235, 235, 235)");
    $(".pro-title").css("color", "white");
    $(".head-title").css("background-color", "rgb(235, 235, 235)");
    $("#introduction").css("background-color", "rgb(235, 235, 235)");
    $("#nav-color-bar").css("background-color", "salmon");
})