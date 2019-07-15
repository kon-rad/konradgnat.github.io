const toggleMenu = () => {
	const menu = document.getElementById('navbar');
	if (!menu) {
		return;
	}

	if (menu.classList.contains('collapse')) {
		menu.classList.remove('collapse');
		return;
	}

	menu.classList.add('collapse');
};

const button = document.getElementById('menuToggle');

$(document).ready(() => {
	if (button) {
		button.addEventListener('click', toggleMenu);
	}
});
