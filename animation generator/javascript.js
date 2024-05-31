const animationContainer = document.querySelector('.animation-container');
const generateBtn = document.querySelector('#generate-btn');

generateBtn.addEventListener('click', () => {
	const animationType = document.querySelector('#animation-type').value;
	const duration = parseInt(document.querySelector('#duration').value);
	const color = document.querySelector('#color').value;

	// generate animation using AnimeJS library
	anime({
		targets: '.animation-element',
		opacity: [0, 1],
		translateX: [100, 0],
		scale: [0.5, 1],
		duration: duration,
		easing: 'easeInOut',
		backgroundColor: color,
	});
});