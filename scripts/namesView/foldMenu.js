function initFoldMenuEvents() {
	document.getElementById("fold-menu-background").addEventListener("click", closeFoldMenu);

	document.addEventListener("keyup", event => {
		if (event.key === "Escape") closeFoldMenu();
	});
}

function showFoldMenu(personIndex) {
	const foldMenu = document.getElementById("fold-menu");
	const background = document.getElementById("fold-menu-background");

	// positionning
		const menuRect = foldMenu.getBoundingClientRect();
		const rect = listNodes[personIndex].getBoundingClientRect();
		let x = rect.right + 10;
		let y = rect.top;  

		// moving the menu if it is outside the window
		if (x + menuRect.width > document.body.getBoundingClientRect().right) {
			x = rect.right - menuRect.width;
			y = rect.bottom + 10;
		}
		
		foldMenu.style.left = x + "px";
		foldMenu.style.top = y + "px";

	background.style.display = "initial";
	foldMenu.classList.add("show");

	initializeFoldMenuBtnEvents(personIndex);
	renderFoldMenuBtns(personIndex);
}

function resetFoldMenu(personIndex) {
	removeAllEventListeners(document.getElementById("fold-menu"));
	initializeFoldMenuBtnEvents(personIndex);
	
	renderFoldMenuBtns(personIndex);
}

function renderFoldMenuBtns(personIndex) {
	// move up & down buttons
	btnSetEnabled(document.getElementById("move-up-btn"), personIndex !== 0);
	btnSetEnabled(document.getElementById("move-down-btn"), personIndex !== persons.length - 1);

	// passed button
	const passed = persons[personIndex].passed;
	document.getElementById("set-passed-btn").style.display = passed ? "" : "none";
	document.getElementById("set-not-passed-btn").style.display = passed ? "none" : "";
}

function initializeFoldMenuBtnEvents(personIndex) {
	// move up button
	document.getElementById("move-up-btn").addEventListener("click", event => {
		movePerson(personIndex, -1);
		resetFoldMenu(personIndex - 1);
	});

	// move down button
	document.getElementById("move-down-btn").addEventListener("click", event => {
		movePerson(personIndex, 1);
		resetFoldMenu(personIndex + 1);
	});

	// passed buttons
	const passedBtnEvent = event => {
		const person = persons[personIndex];
		setPassed(person, !person.passed);
		renderFoldMenuBtns(personIndex);
	};
	document.getElementById("set-passed-btn").addEventListener("click", passedBtnEvent);
	document.getElementById("set-not-passed-btn").addEventListener("click", passedBtnEvent);

	// remove button
	document.getElementById("remove-btn").addEventListener("click", event => {
		removePerson(personIndex);
		closeFoldMenu();
	});
}

function closeFoldMenu() {
	const foldMenu = document.getElementById("fold-menu");
	if (!foldMenu.classList.contains("show")) return;

	const background = document.getElementById("fold-menu-background");

	foldMenu.classList.remove("show");
	background.style.display = "none";

	removeAllEventListeners(foldMenu);
}