
var moves =0
var playerO="images/6.jpg";
var playerX="images/7.jpg";
var turn = "x";
var td ="1,2,3,4,4,5,7,8,9";


$("td").on("click", function(event){
    moves++;
    if (turn == "x"){
    console.log(event.target, "x");
        
       
        $( event.target ).addClass( "x" );
        $(event.target).html('<img src ="images/6.jpg"width ="180" height= "180">');

        turn = "o"

        checkWin()
    }
    
    else if (turn == "o") {
        console.log(event.target);
        
        
        $( event.target ).addClass( "o" );
        $(event.target).html('<img src = "images/7.jpg"width ="180" height= "180"></img>');
        checkWin()
    turn = "x"
}}

);

function checkWin() {
    if 
    
    ($("#1").hasClass("x")&&($("#2").hasClass("x")&&($("#3").hasClass("x")))){
         swal({
            title: "You Win",
            icon: "images/4.gif" 
         });
    }
     if
     ($("#4").hasClass("x")&&($("#5").hasClass("x")&&($("#6").hasClass("x")))){
        swal({
            title: "You Win",
            icon: "images/4.gif" });
    }
    
     if
     ($("#7").hasClass("x")&&($("#8").hasClass("x")&&($("#9").hasClass("x")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#1").hasClass("x")&&($("#4").hasClass("x")&&($("#7").hasClass("x")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#2").hasClass("x")&&($("#5").hasClass("x")&&($("#8").hasClass("x")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#3").hasClass("x")&&($("#6").hasClass("x")&&($("#9").hasClass("x")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#3").hasClass("x")&&($("#5").hasClass("x")&&($("#7").hasClass("x")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
    if
    ($("#1").hasClass("x")&&($("#5").hasClass("x")&&($("#9").hasClass("x")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     else if
     ($("#1").hasClass("o")&&($("#2").hasClass("o")&&($("#3").hasClass("o")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
    if 
    ($("#4").hasClass("o")&&($("#5").hasClass("o")&&($("#6").hasClass("o")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#7").hasClass("o")&&($("#8").hasClass("o")&&($("#9").hasClass("o")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#1").hasClass("o")&&($("#4").hasClass("o")&&($("#7").hasClass("o")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#2").hasClass("o")&&($("#5").hasClass("o")&&($("#8").hasClass("o")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#3").hasClass("o")&&($("#6").hasClass("o")&&($("#9").hasClass("o")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
    
     if
     ($("#3").hasClass("o")&&($("#5").hasClass("o")&&($("#7").hasClass("o")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#1").hasClass("o")&&($("#5").hasClass("o")&&($("#9").hasClass("o")))){
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if (moves==9){
    
    swal({title: "NO One Win",
    icon: "images/3.gif"});
    }
    }
     
     
      function RestGame  () {
          location.reload();
      }
       
