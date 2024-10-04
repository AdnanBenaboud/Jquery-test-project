
$(".No").on("mouseover" , function () {
    var rand1 = Math.floor(Math.random()*2+1);

    var randwidth = Math.floor(Math.random()*500);
    var randheight = Math.floor(Math.random()*500);
    if(rand1 === 1){    
        $(".Datebox").css("position" , "relative");
        $(".Datebox").css("left" , randwidth+"px");
        $(".Datebox").css("top" , randheight+"px");
    }   

    else{
        $(".Datebox").css("position" , "relative");
        $(".Datebox").css("right" , randwidth+"px");
        $(".Datebox").css("top" , randheight+"px");
    }

})

$(".Yes").click( function(){
    document.querySelector(".Datebox").classList.add("visibility");
    $("h3").css("visibility" , "visible");
    $("h3").attr("class" , "final");
})