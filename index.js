function sumPrime(max){
  var sum = 0;
  for(var i = 2; i <= max; i++){
  var notPrime = false;
  for(var j = 2; j <= i; j++){
    if(i % j===0 && j !== i){
      notPrime=true;
      }
    }
    if (notPrime === false){
      sum = sum + i;
    }
  }
  return sum;
}
document.write(sumPrime(977));