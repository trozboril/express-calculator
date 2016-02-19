function setFunction (num1, num2, operator) {
	if (operator === 'add') {
		answer = num1 + num2;
	} else if (operator === 'sub') {
		answer = num1 - num2;
	} else if (operator === 'mult') {
		answer = num1 * num2;
	} else if (operator === 'div') {
		answer = num1 / num2;
	} else {
		answer = 'error!';
	}
	return answer;
}

module.exports = {
	setFunction: setFunction
};