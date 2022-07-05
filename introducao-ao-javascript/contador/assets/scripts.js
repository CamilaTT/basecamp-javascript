let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const BTN_INCREMENT = document.getElementById('adicionar');
const BTN_DECREMENT = document.getElementById('subtrair');

function increment() {
	if(count < 10) {
		count++;
		CURRENT_NUMBER.innerHTML = count;
		changeColor()
	}
}

function decrement() {
	if(count > -10) {
		count--;
		CURRENT_NUMBER.innerHTML = count;
		changeColor()
	}
}

function test() {
	kdowkdpo;
}

function changeColor() {
	if(count >= 0) {
		CURRENT_NUMBER.classList.remove('negativeNumber')
	} else {
		CURRENT_NUMBER.classList.add('negativeNumber')
	}
}

BTN_INCREMENT.addEventListener('click', increment);
BTN_DECREMENT.addEventListener('click', decrement);
