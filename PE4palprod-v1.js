function largestPalindromeProduct(n) {
	let greatestPal = 0
	
	let product
	let productString
	let productBackString
		for (let i=1*10**(n-1);i <1*10**n;i++){
			
	  
		for (let j = 1*10**(n-1);j<1*10**n;j++){
			
			product = i*j
			productString=String(product)
			productBackString=String(product).split("").reverse().join("")
			if (productString===productBackString){
				console.log("I found a palindrome: " + productString)
				if(Number(productString)>greatestPal){
					console.log("the biggest so far!")
					greatestPal = productString
				}
			}
			
	}
	}
	console.log(greatestPal)
	return Number(greatestPal)
	}
	