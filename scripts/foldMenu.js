function showFoldMenu(x, y, nameIndex) {
	const foldMenu = document.getElementById("foldMenu");
	const background = document.getElementById("fold-menu-background");

	background.style.display = "initial";
	foldMenu.style.display = "initial";	

	const menuHeight = foldMenu.getBoundingClientRect().height;
	y -= menuHeight;

	foldMenu.style.left = x + "px";
	foldMenu.style.top = y + "px";


	const removeBtnListener = event => {
		names.splice(nameIndex, 1);
		redrawList();
		closeFoldMenu();
	}

	let removeBtn = document.getElementById("removeBtn");
	removeBtn.addEventListener("click", removeBtnListener);

	setTimeout(() => {
		executeOnClickOutSide(background, closeFoldMenu);
	});

	function closeFoldMenu() {
		foldMenu.style.display = "none";
		background.style.display = "none";

		removeBtn.removeEventListener("click", removeBtnListener);
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