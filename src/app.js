let findPrime = (...numbers) => {
	let infos = [];
	for (let num of numbers) {
		let numObj = {
			number: num,
			prime: true,
		};
		if (num < 2) {
			numObj.prime = false;
			infos.push(numObj);
		} else if (num !== 2 && num % 2 === 0) {
			numObj.prime = false;
			infos.push(numObj);
		} else if (num !== 3 && num % 3 === 0) {
			numObj.prime = false;
			infos.push(numObj);
		} else {
			for (let i = 3; i < num / 2; i++) {
				if (num % i === 0) {
					numObj.prime = false;
					infos.push(numObj);
					break;
				}
			}
			if (numObj.prime) {
				infos.push(numObj);
			}
		}
	}
	if (numbers.length < 100) {
		for (let info of infos) {
			console.log(`${info.number} is ${info.prime ? 'prime' : 'not prime'}`);
		}
	} else {
		return infos;
	}
};

let findFriendNumbers = (firstNum, secondNum, log = true) => {
	let firstDivisors = [];
	let secondDivisors = [];

	for (let i = 1; i <= firstNum / 2; i++) {
		if (firstNum % i === 0) {
			firstDivisors.push(i);
		}
	}

	for (let i = 1; i <= secondNum / 2; i++) {
		if (secondNum % i === 0) {
			secondDivisors.push(i);
		}
	}

	let result =
		sum(firstDivisors) === secondNum && sum(secondDivisors) === firstNum;

	if (!log) {
		return result;
	}
	if (result) {
		console.log(`${firstNum} and ${secondNum} are friend numbers!`);
	} else {
		console.log(`${firstNum} and ${secondNum} are not friend numbers!`);
	}
};

let sum = (...numbers) => {
	/* //FIRST METHOD 
	let summary = 0;
	for (let num of numbers) {
		summary += num;
	} */
	// SECOND METHOD
	let summary = numbers.reduce((num, other) => num + other);
	return summary;
};

let thousandPrimeFinder = () => {
	let numbers = [];
	for (let i = 0; i <= 1000; i++) {
		numbers.push(i);
	}
	let result = findPrime(...numbers);
	let primes = result.filter((r) => r.prime).map((p) => p.number);
	console.log('Primes in first 1000 are:', ...primes);
};

let thousandPerfectFinder = () => {
	let perfects = [];
	for (let num = 1; num <= 1000; num++) {
		let summary = 0;
		for (let i = 1; i < num; i++) {
			if (num % i === 0) {
				summary += i;
			}
		}
		summary === num ? perfects.push(num) : {};
	}
	console.log('Perfect numbers in first 1000 are:', ...perfects);
};

// * Test Bölümü / * \ Test Section

findPrime(2, 5, 8, 21, 13);
findPrime(3, 5);
findPrime(2);

console.log(`\\\\\\\\\\ DETAILED TESTING \\\\\\\\\\`);
findPrime(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31);
findPrime(
	0,
	1,
	4,
	6,
	8,
	9,
	10,
	12,
	14,
	15,
	16,
	18,
	20,
	21,
	22,
	24,
	25,
	26,
	27,
	28,
	30
);

thousandPrimeFinder();
thousandPerfectFinder();
