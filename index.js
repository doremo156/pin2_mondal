//1st thing to do is hide the classes
$("#education").hide();
$("#skills").hide();
$("#contact").hide();
$(".comand-info").hide();
$(".help-div").hide();
$(".about").hide();
$(".resume").hide();

var delayInMilliseconds = 2500; //1 second

setTimeout(function() { //This is the function to delay between two line text in text animation (time out function)
  $("#div-ani").text("You Successfully Hacked My Account!"); 
  $("#div-ani").attr('class','typing2')  //your code to be executed after 2.5 second
}, delayInMilliseconds);

$(".comand-code").keyup(function(event){
    var takeInput =$(".comand-code input").val();
    if(event.which===13){
        $(".comand-code p").text("");
        if(takeInput==="help"){
            $(".comand-info").show();
            $("#education").hide();
            $("#skills").hide();
            $("#contact").hide();
            $(".resume").hide();
        }
        // $("body").css('opticity','20%');
        else if(takeInput==="education"){
            $("#education").show();
            $("#skills").hide();
            $("#contact").hide();
            $(".comand-info").hide();
            $(".resume").hide();
            $("#terminal").css('opacity','20%');
        }
        else if(takeInput==="skills"){
            $("#skills").show();
            $("#education").hide();
            $("#contact").hide();
            $(".comand-info").hide();
            $(".resume").hide();
            $("#terminal").css('opacity','20%');
        }
        else if(takeInput==="contact"){
            $("#contact").show();
            $("#education").hide();
            $("#skills").hide();
            $(".comand-info").hide();
            $(".resume").hide();
            $("#terminal").css('opacity','20%');
        }
        else if(takeInput==="white"){
            $("#terminal").css('color','white');
            $(".comand-code input").css('color','white');
        }
        else if(takeInput==="resume"){
            $(".resume").show();
            $("#contact").hide();
            $("#education").hide();
            $("#skills").hide();
            $(".comand-info").hide();
            $("#terminal").css('opacity','20%');
        }
        // $("body").css('opticity','100%');
        else{
            $(".comand-code p").text(takeInput+" is not recognized as an internal or external command");
            $("#education").hide();
            $("#skills").hide();
            $("#contact").hide();
            $(".comand-info").hide();
        }
        $(".comand-code input").val("");
       // $(".comand-code p").html(" <span>Write the command <i class='fa fa-brands fa-pinterest'></i>:</span><input type='text' spellcheck='false'>");
    }
});  
function eduHide(){
    $("#education").hide();
    $("#terminal").css('opacity','100%');
} 
function skillHide(){
    $("#skills").hide();
    $("#terminal").css('opacity','100%');
}
function contactHide(){
    $("#contact").hide(); 
    $("#terminal").css('opacity','100%');
    $("#text-animation").css('opacity','100%');
}
// RESUME HIDE BY EVENT LISTENER
$(".resume img").dblclick(function(){
    $(".resume").hide(); 
    $("#terminal").css('opacity','100%');
    $("#text-animation").css('opacity','100%');
});
// FUNCTION FOR CLASS "HELP-DIV"-->"HELP-BTN"
function colorGreen(){
    $(".help-text").css('color','rgb(3, 180, 3)');
}
function colorWhite(){
    $(".help-text").css('color','#fff');
}
function helpHide(){
    $(".help-div").hide();
    $("#text-animation").css('opacity','100%');
    $("#terminal").css('opacity','100%');
}
// ------------//
//HELP BUTTON CLICK FUNCTION
function showHelp(){
    $(".help-div").show();
    $(".about").hide();
    $("#text-animation").css('opacity','20%');
    $("#terminal").css('opacity','20%');
}
//FUNCTION FOR CLASS "ABOUT"
function colorGreenAbout(){
    $(".about p").css('color','rgb(3, 180, 3)');
}
function colorWhiteAbout(){
    $(".about p").css('color','#fff');
}
function aboutHide(){
    $(".about").hide();
    $("#text-animation").css('opacity','100%');
    $("#terminal").css('opacity','100%');
}
//ABOUT BUTTON CLICK
function showAbout(){
    $(".about").show();
    $(".help-div").hide();
    $("#text-animation").css('opacity','20%');
    $("#terminal").css('opacity','20%');
}
//CONTACT BUTTON CLICK
function showContact(){
            $("#contact").show();
            $(".help-div").hide();
            $(".about").hide();
            $("#education").hide();
            $("#skills").hide();
            $(".comand-info").hide();
            $("#terminal").css('opacity','20%');
}