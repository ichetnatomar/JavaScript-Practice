const randomNumber = Math.random();
if(randomNumber>=0 && randomNumber<1/3){
  console.log('Computer chooses rock, tie.');
}
else if(randomNumber>=1/3 && randomNumber<2/3){
  console.log('Computer chooses Paper, you lose.');
}
else{
  console.log('Computer chooses scissors, you win.');
}