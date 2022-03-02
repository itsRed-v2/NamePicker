window.addEventListener("DOMContentLoaded", event => {
	
	const pickBtn = document.getElementById("random-pick-btn");
	pickBtn.addEventListener("click", event => {
		const nonPassed = getNonPassed();
		
		let picked = nonPassed[Math.floor(Math.random() * nonPassed.length)];

		highlight(picked);
		picked.passed = true;

		redrawList();
	});
});

function pickBtnSetEnabled(boolean) {
	btnSetEnabled(document.getElementById("random-pick-btn"), boolean);
	btnSetEnabled(document.getElementById("mekdad-pick-btn"), boolean);
}