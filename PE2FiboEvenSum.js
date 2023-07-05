function fiboEvenSum(n) {
  let fibs = [1,2]
  let sum = 0
  while (fibs[fibs.length-1]+fibs[fibs.length-2]<=n){
    fibs.push(fibs[fibs.length-1]+fibs[fibs.length-2])
  }
  console.log(fibs)
  for(let i = 0;i < fibs.length;i++){
    if (fibs[i]%2===0){
      sum+=fibs[i]
  }
  }
  console.log(sum)
  return sum;
}