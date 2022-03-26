function initializeSelectorBtns() {
	document.getElementById("selector-back-btn").addEventListener("click", event => {
		pageManager.showNameList();
		resetSection();

		const rolledPerson = getNonPassed()[rolledIndex];
		highlight(rolledPerson);
		setPassed(rolledPerson, true);
	});

	document.getElementById("selector-reroll-btn").addEventListener("click", event => {
		resetSection();
		startRoll();
	});

	function resetSection() {
		document.getElementById("roll-list").remove();
		setSelectorBtnsVisible(false);
	}
}

function setSelectorBtnsVisible(bool) {
	const buttons = document.getElementsByClassName("selector-btn");
	for (let i = 0; i < buttons.length; i++) {
		const btn = buttons[i];
		
		if (bool) btn.classList.add("show");
		else btn.classList.remove("show");
	}
}