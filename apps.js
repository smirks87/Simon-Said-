let sequence = [];
let userSequence = [];
let level = 0;

// name the elements you're selecting

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');
const heading = document.querySelector('.js-heading');
const squaresContainer = document.querySelector('js-container');

// define functions, event handlers and a place to store data

function userTurn(level) {
	squaresContainer.classList.remove('unclickable');
	info.textContent = `Your turn: ${level} Tap${level > 1 ? 's' : ''}`;
}

function activateSquare(color) {
	const squares = document.querySelector(`[data-squares='${color}']`);

	setTimeout(() => {
		squares.classList.remove('activated');
	}, 200);
}

function playMatch(nextSequence) {
	nextSequence.forEach((color, index) => {
		setTimeout(() => {
			activateSquare(color);
		}, (index + 1) * 600);
	});
}

function nextMove() {
	const squares = ['orange', 'blue', 'green', 'pink'];
	const random = squares[Math.floor(Math.random() * squares.length)];

	return random;
}

function handleClick(squares) {
	const index = userSequence.push(squares) - 1;
	const remainingTaps = sequence.length - userSequence.length;
}

function startGame() {
	startButton.classList.add('hidden');
	info.classList.remove('hidden');
	info.textContent = 'wait for the computer';
	nextLevel();
}

// add event listeners

startButton.addEventListener('click', startGame);
