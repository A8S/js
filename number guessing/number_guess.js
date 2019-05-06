var number=7;
alert("this is a number guessing game");
var guessed=prompt("enter the number");
if( Number(guessed) === number)
  {
    alert("You are correct");
  }
  else {
    alert("you are wrong" );
    prompt("enter another number");
  }
