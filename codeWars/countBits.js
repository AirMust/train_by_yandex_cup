const countBits = (num) => {
	let count = 0;

	while(num > 0){
		count += num % 2;
		num = (num % 2 === 0) ? num / 2 : (num - 1) / 2;
	}
	return count
}


console.log(countBits(10))
