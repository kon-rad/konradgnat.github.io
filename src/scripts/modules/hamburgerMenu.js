
console.log('activateHamburgerMenu js');
const toggleMenu = () => {
	const menu = document.getElementsByClassName('collapse');
	console.log('menu', menu);
};


const button = document.getElementById('menuToggle');
console.log('btton', button);
if (button) {
	button.addEventListener('click', toggleMenu);
};
