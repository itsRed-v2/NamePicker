window.addEventListener("DOMContentLoaded", event => {
	
	const pickBtn = document.getElementById("random-pick-btn");
	pickBtn.addEventListener("click", event => {
		let picked = Math.floor(Math.random() * persons.length);
		highlight(picked);
		persons[picked].passed = true;

		redrawList();
	});
});

function pickBtnEnabled(boolean) {
	const pickBtn = document.getElementById("random-pick-btn");

	if (boolean) pickBtn.removeAttribute("disabled");
	else pickBtn.setAttribute("disabled", "disabled");
}