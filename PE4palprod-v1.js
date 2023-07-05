function largestPalindromeProduct(n) {
let product
	for (let i = 1*10**n-1;1*10**(n-1);i--){
		console.log(i)
  
    for (let j = 1*10**n-1;1*10**(n-1);j--){
		console.log(j)
		product = i*j
		productArr=String(product).split("")
		console.log(productArr)
		for(let k = 0;k<productArr.length;k++){
		    if (productArr[k]!==productArr[productArr.length-1-k]){
		    console.log("not a pal")
		        
		    } else{
		        console.log("it's the first pal!")
		        console.log("the first pal is: " + product)
		        console.log("I made it by multiplying " + i + " and " + j)
		        return product
		    }
		
}
}
}
}