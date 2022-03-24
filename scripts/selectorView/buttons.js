function initializeSelectorBtns() {
	document.getElementById("back-selector-btn").addEventListener("click", event => {
		pageManager.showNameList();
	});
}