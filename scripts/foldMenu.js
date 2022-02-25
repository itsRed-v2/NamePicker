function showFoldMenu(listRow, personIndex) {
	const foldMenu = document.getElementById("foldMenu");
	const background = document.getElementById("fold-menu-background");

	background.style.display = "initial";
	foldMenu.style.display = "initial";	

	let menuRect = foldMenu.getBoundingClientRect();
	const rect = listRow.getBoundingClientRect();
	let x = rect.right + 10;
	let y = rect.bottom - menuRect.height;

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

	initializeFoldMenuBtns(personIndex);

	// close menu when click outside
	setTimeout(() => {
		background.addEventListener("click", closeFoldMenu);
	});
}

function initializeFoldMenuBtns(personIndex) {
	// move up button
	const moveUpBtn = document.getElementById("move-up-btn");
	
	btnEnabled(moveUpBtn, personIndex !== 0);

	moveUpBtn.addEventListener("click", event => {
		moveInArray(persons, personIndex, -1);
		redrawList();
		closeFoldMenu();
	});

	// move down button
	const moveDownBtn = document.getElementById("move-down-btn");

	btnEnabled(moveDownBtn, personIndex !== persons.length - 1);

	moveDownBtn.addEventListener("click", event => {
		moveInArray(persons, personIndex, 1);
		redrawList();
		closeFoldMenu();
	});

	// remove button
	document.getElementById("removeBtn").addEventListener("click", event => {
		persons.splice(personIndex, 1);
		redrawList();
		closeFoldMenu();
	});
}

function closeFoldMenu() {
	const foldMenu = document.getElementById("foldMenu");
	const background = document.getElementById("fold-menu-background");

	foldMenu.style.display = "none";
	background.style.display = "none";

	removeAllEventListeners(foldMenu);
	removeAllEventListeners(background);
}