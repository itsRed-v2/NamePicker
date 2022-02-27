function showFoldMenu(listRow, personIndex) {
	const foldMenu = document.getElementById("fold-menu");
	const background = document.getElementById("fold-menu-background");

	background.style.display = "initial";
	foldMenu.style.display = "initial";	

	let menuRect = foldMenu.getBoundingClientRect();
	const rect = listRow.getBoundingClientRect();
	let x = rect.right + 10;
	let y = rect.top;

	foldMenu.style.left = x + "px";
	foldMenu.style.top = y + "px";

	menuRect = foldMenu.getBoundingClientRect(); // the rect has been modified so it needs to be updated

	// moving the menu if it is outside the window
	if (menuRect.right > document.body.getBoundingClientRect().right) {		
		x = rect.right - menuRect.width;
		y = rect.bottom + 10;

		foldMenu.style.left = x + "px";
		foldMenu.style.top = y + "px";
	}

	initializeFoldMenuBtnEvents(personIndex);
	renderFoldMenuBtns(personIndex);

	// close menu when click outside
	setTimeout(() => {
		background.addEventListener("click", closeFoldMenu);
	});
}

function renderFoldMenuBtns(personIndex) {
	// move up button
	const moveUpBtn = document.getElementById("move-up-btn");
	btnSetEnabled(moveUpBtn, personIndex !== 0);

	// move down button
	const moveDownBtn = document.getElementById("move-down-btn");
	btnSetEnabled(moveDownBtn, personIndex !== persons.length - 1);

	// passed button
	const person = persons[personIndex];

	const passedBtn = document.getElementById("set-passed-btn");
	const notPassedBtn = document.getElementById("set-not-passed-btn");
	if (person.passed) {
		passedBtn.style.display = "";
		notPassedBtn.style.display = "none";
	} else {
		passedBtn.style.display = "none";
		notPassedBtn.style.display = "";
	}
}

function initializeFoldMenuBtnEvents(personIndex) {
	// move up button
	document.getElementById("move-up-btn").addEventListener("click", event => {
		moveInArray(persons, personIndex, -1);
		redrawList();
		closeFoldMenu();
	});

	// move down button
	document.getElementById("move-down-btn").addEventListener("click", event => {
		moveInArray(persons, personIndex, 1);
		redrawList();
		closeFoldMenu();
	});

	// passed button
	const person = persons[personIndex];

	document.getElementById("set-passed-btn").addEventListener("click", event => {
		person.passed = false;
		redrawList();
		renderFoldMenuBtns(personIndex);
	});
	document.getElementById("set-not-passed-btn").addEventListener("click", event => {
		person.passed = true;
		redrawList();
		renderFoldMenuBtns(personIndex);
	});

	// remove button
	document.getElementById("remove-btn").addEventListener("click", event => {
		persons.splice(personIndex, 1);
		redrawList();
		closeFoldMenu();
	});
}

function closeFoldMenu() {
	const foldMenu = document.getElementById("fold-menu");
	const background = document.getElementById("fold-menu-background");

	foldMenu.style.display = "none";
	background.style.display = "none";

	removeAllEventListeners(foldMenu);
	removeAllEventListeners(background);
}