
var moves =0
/// the images mean x or o
var playerO="images/6.jpg";
var playerX="images/7.jpg";
var turn = "x";
var gameOver = false

//function to add x and o when click on td
$("td").on("click", function(event){
    moves++;
    if (turn == "x"){
    console.log(event.target, "x");
        
       
        $(event.target ).addClass( "x" );
        $(event.target).html('<img src ="images/6.jpg"width ="180" height= "180">');

        turn = "o"

        checkWin()
    }
    
    else if (turn == "o") {
        console.log(event.target);
        
        
        $(event.target ).addClass( "o" );
        $(event.target).html('<img src = "images/7.jpg"width ="180" height= "180"></img>');
        checkWin()
    turn = "x"
}}

);
//function to check the win chances
function checkWin() {
    if 
    /// in these cases mean the chance of x win
    ($("#1").hasClass("x")&&($("#2").hasClass("x")&&($("#3").hasClass("x")))){
        //play audio win
        var winAudio = new Audio('audio/win.mp3');
            winAudio.play();
gameOver = true
            
        swal({
            title: "You Win",
            icon: "images/4.gif" 
         });

    }
     if
     ($("#4").hasClass("x")&&($("#5").hasClass("x")&&($("#6").hasClass("x")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif" });
    }
    
     if
     ($("#7").hasClass("x")&&($("#8").hasClass("x")&&($("#9").hasClass("x")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#1").hasClass("x")&&($("#4").hasClass("x")&&($("#7").hasClass("x")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#2").hasClass("x")&&($("#5").hasClass("x")&&($("#8").hasClass("x")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#3").hasClass("x")&&($("#6").hasClass("x")&&($("#9").hasClass("x")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#3").hasClass("x")&&($("#5").hasClass("x")&&($("#7").hasClass("x")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }

    /// in these cases mean the chance of o win
    if
    ($("#1").hasClass("x")&&($("#5").hasClass("x")&&($("#9").hasClass("x")))){
        var winAudio = new Audio('audio/win.mp3');
            winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     else if
     ($("#1").hasClass("o")&&($("#2").hasClass("o")&&($("#3").hasClass("o")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
    if 
    ($("#4").hasClass("o")&&($("#5").hasClass("o")&&($("#6").hasClass("o")))){
        var winAudio = new Audio('audio/win.mp3');
            winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#7").hasClass("o")&&($("#8").hasClass("o")&&($("#9").hasClass("o")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#1").hasClass("o")&&($("#4").hasClass("o")&&($("#7").hasClass("o")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#2").hasClass("o")&&($("#5").hasClass("o")&&($("#8").hasClass("o")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#3").hasClass("o")&&($("#6").hasClass("o")&&($("#9").hasClass("o")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
    
     if
     ($("#3").hasClass("o")&&($("#5").hasClass("o")&&($("#7").hasClass("o")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
     if
     ($("#1").hasClass("o")&&($("#5").hasClass("o")&&($("#9").hasClass("o")))){
        var winAudio = new Audio('audio/win.mp3');
        winAudio.play();
gameOver = true
        swal({
            title: "You Win",
            icon: "images/4.gif"});
    }
    /// in this case means the x and o are equal
    /// 9 times moves
     if (moves==9 && gameOver !== true){
        ///// play audio no one win
        var no4Audio = new Audio('audio/no4.mp3');
        no4Audio.play();
    swal({title: "NO One Win",
    icon: "images/3.gif"});
    }
    }
      function RestGame  () {
          location.reload();
      }
       
/// end function