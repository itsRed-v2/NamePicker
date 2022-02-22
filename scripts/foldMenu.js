function showFoldMenu(listRow, nameIndex) {
	const foldMenu = document.getElementById("foldMenu");
	const background = document.getElementById("fold-menu-background");

	background.style.display = "initial";
	foldMenu.style.display = "initial";	

	const menuHeight = foldMenu.getBoundingClientRect().height;
	const rect = listRow.getBoundingClientRect();
	let x = rect.right + 10;
	let y = rect.bottom - menuHeight;

	foldMenu.style.left = x + "px";
	foldMenu.style.top = y + "px";

	// remove button
	document.getElementById("removeBtn").addEventListener("click", event => {
		selected = undefined;
		names.splice(nameIndex, 1);
		redrawList();
		closeFoldMenu();
	});

	// close menu when click outside
	setTimeout(() => {
		executeOnClickOutSide(background, closeFoldMenu);
	});

	function closeFoldMenu() {
		foldMenu.style.display = "none";
		background.style.display = "none";

		removeAllEventListeners(foldMenu);
	}
}

function executeOnClickOutSide(background, lamdba) {
	const outsideClickListener = event => {
		background.removeEventListener("click", outsideClickListener);
		lamdba();
	}

	background.addEventListener('click', outsideClickListener);
}

function removeAllEventListeners(node) {
	let new_node = node.cloneNode(true);
	node.parentNode.replaceChild(new_node, node);
}