const isPrime = (number) => {
	if (number === 2) {
		return true;
	}

	for (let i = 2; i <= number; i++) {
		let result = 0;
		result = number % i;
		if (result === 0 && i !== number) {
			return false;
		}
	}
	return true;
};

console.log(isPrime(71));
