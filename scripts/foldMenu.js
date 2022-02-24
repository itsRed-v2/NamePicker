function showFoldMenu(listRow, nameIndex) {
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
		y = rect.top - menuRect.height - 10;

		foldMenu.style.left = x + "px";
		foldMenu.style.top = y + "px";
	}

	// move up & down buttons
	const moveUpBtn = document.getElementById("move-up-btn");
	if (nameIndex === 0) {
		lineEnabled(moveUpBtn, false);
	} else {
		lineEnabled(moveUpBtn, true);
		moveUpBtn.addEventListener("click", event => {
			moveInArray(persons, nameIndex, -1);
			redrawList();
			closeFoldMenu();
		});
	}
	const moveDownBtn = document.getElementById("move-down-btn");
	if (nameIndex === persons.length - 1) {
		lineEnabled(moveDownBtn, false);
	} else {
		lineEnabled(moveDownBtn, true);
		moveDownBtn.addEventListener("click", event => {
			moveInArray(persons, nameIndex, 1);
			redrawList();
			closeFoldMenu();
		});
	}

	// remove button
	document.getElementById("removeBtn").addEventListener("click", event => {
		persons.splice(nameIndex, 1);
		redrawList();
		closeFoldMenu();
	});

	// close menu when click outside
	setTimeout(() => {
		background.addEventListener("click", closeFoldMenu);
	});

	function closeFoldMenu() {
		foldMenu.style.display = "none";
		background.style.display = "none";

		removeAllEventListeners(foldMenu);
		removeAllEventListeners(background);
	}
}

function lineEnabled(node, enabled) {
	if (node.className !== "fold-menu-line"
			&& node.className !== "unavailable-fold-menu-line")
		return;
	
	if (enabled) node.className = "fold-menu-line";
	else node.className = "unavailable-fold-menu-line";
}