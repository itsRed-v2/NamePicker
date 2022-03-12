function initializePickBtns() {
	const pickBtn = document.getElementById("random-pick-btn");
	pickBtn.addEventListener("click", event => {
		const nonPassed = getNonPassed();
		const picked = nonPassed[Math.floor(Math.random() * nonPassed.length)];

		highlight(picked);
		setPassed(picked, true);
	});
}

function pickBtnSetEnabled(boolean) {
	btnSetEnabled(document.getElementById("random-pick-btn"), boolean);
	btnSetEnabled(document.getElementById("mekdad-pick-btn"), boolean);
}