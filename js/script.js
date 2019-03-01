//business logic

/*this function runs a random numbers between 1 and 6 while displaying it*/
function rolling() {
  myVar=setInterval(roll, 10)
}
function roll(){
  var ran = Math.floor(1 + Math.random()*6);
  document.getElementById('dice').innerHTML=ran
}

//Function to stop the rolling
function stop(){
  clearInterval(myVar);
}
