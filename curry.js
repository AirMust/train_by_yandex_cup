const curry = operation => {
	return function helper(...args) {
		if (args.length >= operation.length){
			operation(1, 3)
			return operation.apply(this, args)
		} else{
			return function(){
				return helper.apply(this, args.concat(...arguments))
			}
		}
	}
}

const sum = (a, b) => a + b


console.log(curry(sum)(1)(2))
