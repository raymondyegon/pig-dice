//business logic
function Player(turn){
  this.totalscore=0;
  this.gains=0
}

/*this function runs a random numbers between 1 and 6 while displaying it*/
function rolling() {
  myVar=setInterval(roll, 10)
}

function roll(){
  var ran =Math.floor(1 + Math.random()*6);
  document.getElementById('dice').innerHTML=ran
}
//function to keep adding rolling numbers
var gains = 0;
var totalscore = 0;
function ad(a){
  return gains += a
}

//Function to stop the rolling
function stop(){
  clearInterval(myVar);
  var num = parseInt(document.getElementById('dice').innerHTML)
  if (num == 1) {
    totalscore += 0
    document.getElementById('gains').innerHTML='0'
  } else {
    document.getElementById('gains').innerHTML= ad(num)
  }
}

//function that gets the randomized number
function number() {
  totalscore +=gains
  document.getElementById('score').innerHTML= totalscore
}


