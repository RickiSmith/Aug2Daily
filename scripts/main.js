/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  var total = 0;
  var aceCounter = 0;
  for (var i = 0; i < hand.length; i++) {
    if(hand[i]== "K" || hand[i]=="Q" || hand[i]=="J"){
      total +=10;
    }else if(hand[i]=="A"){
      aceCounter++;
      total +=11;
    }else {
      total += Number(hand[i]);
    }
  }
  if(total>21){
    for (var j = 0; j < aceCounter; j++) {
      total -= 10;
      if(total <= 21){
        break;
      }
    }
  }
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
