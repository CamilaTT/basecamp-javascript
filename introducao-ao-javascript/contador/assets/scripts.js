let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const BTN_INCREMENT = document.getElementById('adicionar');
const BTN_DECREMENT = document.getElementById('subtrair');

function increment() {

	if(count < 10) {
		count++;
		console.log(count)
		CURRENT_NUMBER.innerHTML = count;
	}
}

function decrement() {

	if(count > -10) {
		count--;
		console.log(count)
		CURRENT_NUMBER.innerHTML = count;
	}
}

function test() {
	kdowkdpo;
}

BTN_INCREMENT.addEventListener('click', increment);
BTN_DECREMENT.addEventListener('click', decrement);
