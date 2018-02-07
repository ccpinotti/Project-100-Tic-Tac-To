// wait for the DOM to finish loading
$(document).ready(function() {
  console.log(alert)
  let player = 1;

  $(".box").on('click',function() {
    if($(this).text() === "" && player === 1){
      $(this).text('X');
      player = 2;
    }else if (player === 2 && $(this).text()===""){
      $(this).text("0");
      player = 1;
    }else($('.message').html('Try another square'));

  });
  //reset button
  $('button').on('click',function() {
    $(".box").text("")
  });
  //turn counter
  var nextTurn= "X"
  function changeTurn(){
      if(nextTurn == "X"){
           nextTurn = "O";
      } else {
           nextTurn = "X";
      }
  }
  if (this.id == ".box"){
    console.log("turn counter alive")
      if(document.getElementById(".box").text == ""){
           document.getElementById(".box").text = nextTurn;
           changeTurn();
      }
  }
  // all code to manipulate the DOM
  // goes inside this function
});
