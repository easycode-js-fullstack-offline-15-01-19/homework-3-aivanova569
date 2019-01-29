// -------------------------- Home work --------------------------
// ---------------------- Ivanova Anastasiia ---------------------

// ---------------------------- Cycles ---------------------------
// ------------------------------ !1! ------------------------------
let string = 'i am in the easycode';
let newString = '';

for (let i = 0; i < string.length; i++) {
	if (i === 0 || string[i - 1] === ' ') {
		newString += string[i].toUpperCase()
	} else {
		newString += string[i]
	}
}

// ------------------------------ 2 ------------------------------
let str = 'tseb eht ma i';
let newStr = '';

for (let i = str.length - 1; i >= 0; i--) {
	newStr += str[i];
	console.log(newStr);
}

// ------------------------------ 3 ------------------------------
let result = 1;

for (let i = 1; i <= 10; i++) {
   	result *= i;
}

// ------------------------------ !4! ------------------------------
let line = 'JavaScript is a pretty good language';
let newLine = '';

for (let i = 0; i < line.length; i++) {
	if (line[i - 1] === ' ') {
		newLine += line[i].toUpperCase()
	} else if (line[i] !== ' ') {
		newLine += line[i]
	}	
}

// ------------------------------ 5 ------------------------------
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 1; i <= numbers.length; i++) {
	if (i % 2) {
  	console.log(i)
  }
}

// ------------------------------ 6 ------------------------------
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};

for (let key in list) {
	if (typeof list[key] === 'string') {
		list[key] = list[key].toUpperCase();
	}
}
