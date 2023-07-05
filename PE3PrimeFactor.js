function largestPrimeFactor(number) {
for(let i =2;i<Math.sqrt(number);i++){
  while (number > 2 && number % i === 0){
    console.log(number)
    number = number / i
    
    
  }
}
  console.log(number)
  return(number)
}

largestPrimeFactor(600851475143)