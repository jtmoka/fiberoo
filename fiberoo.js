let fib = function(){
  let one = 1;
  let two = 2;
  let temp = 0;
  let list = [1, 2];
  for(let i = 0;  i < 48; i++){
    temp = one + two;
    one = two;
    two = temp;
    list.push(two);
  }
  return list;
}
numsToStrings = function(list){
  return _.map(list, function(num){ return num + " "; });
}

numEvenNums = function(list){
  let last = 0;
  for(let i = 0;  i < list.length; i++){
    if((list[i] % 2) === 0){
      last++;
    }
  }
  return last;
}
console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));