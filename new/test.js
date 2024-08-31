$(document).ready(function(){
    
    $("#navbar").css("visibility","hidden");

    $("#head").css("background","url(pic/header.jpg)");
    $("#head").css("background-position", "center");
    $("#head").css("background-repeat", "no-repeat");
    $("#head").css("background-size", "cover");
    $("#back").css("visibility", "hidden");

    $("#open").click(function(){
        $("#navbar").css("visibility", "visible");
        $("#open").css("visibility", "hidden");
    });
    $("#close").click(function(){
        $("#navbar").css("visibility", "hidden");
        $("#open").css("visibility", "visible");
    });
    
});
