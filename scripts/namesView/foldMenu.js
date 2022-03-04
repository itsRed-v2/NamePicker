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
	background.addEventListener("click", closeFoldMenu);

	// close menu on escape
	document.addEventListener("keyup", escapeListener);
}

function renderFoldMenuBtns(personIndex) {
	// move up button
	const moveUpBtn = document.getElementById("move-up-btn");
	btnSetEnabled(moveUpBtn, personIndex !== 0);

	// move down button
	const moveDownBtn = document.getElementById("move-down-btn");
	btnSetEnabled(moveDownBtn, personIndex !== persons.length - 1);

	// passed button
	const passed = persons[personIndex].passed;
	document.getElementById("set-passed-btn").style.display = passed ? "" : "none";
	document.getElementById("set-not-passed-btn").style.display = passed ? "none" : "";
}

function initializeFoldMenuBtnEvents(personIndex) {
	// move up button
	document.getElementById("move-up-btn").addEventListener("click", event => {
		movePerson(personIndex, -1);
		redrawList();
		closeFoldMenu();
	});

	// move down button
	document.getElementById("move-down-btn").addEventListener("click", event => {
		movePerson(personIndex, 1);
		redrawList();
		closeFoldMenu();
	});

	// passed buttons
	const passedBtnEvent = event => {
		togglePassed(persons[personIndex]);
		redrawList();
		renderFoldMenuBtns(personIndex);
	};
	document.getElementById("set-passed-btn").addEventListener("click", passedBtnEvent);
	document.getElementById("set-not-passed-btn").addEventListener("click", passedBtnEvent);

	// remove button
	document.getElementById("remove-btn").addEventListener("click", event => {
		removePerson(personIndex);
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
	document.removeEventListener("keyup", escapeListener);
}

const escapeListener = event => {
	if (event.key === "Escape") {
		closeFoldMenu();
	}
};