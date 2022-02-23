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

	// remove button
	document.getElementById("removeBtn").addEventListener("click", event => {
		selected = undefined;
		names.splice(nameIndex, 1);
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

function removeAllEventListeners(node) {
	let new_node = node.cloneNode(true);
	node.parentNode.replaceChild(new_node, node);
}