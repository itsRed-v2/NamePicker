function showAddPopup() {
	document.getElementById("add-popup-container").classList.add("show");

	setTimeout(() => {
		document.getElementById("name-input-area").focus();
	}, 500);
}

function hideAddPopup() {
	document.getElementById("add-popup-container").classList.remove("show");
}

function initializeAddPopup() {
	document.getElementById("open-popup-btn").addEventListener("click", event => {
		showAddPopup();
	});

	const area = document.getElementById("name-input-area");
	area.addEventListener("input", resize);
	resize();

	function resize() {
		area.style.height = "";
		area.style.height = area.scrollHeight - 9 + "px"
		area.style.width = "";
		area.style.width = area.scrollWidth + "px";
	}

	document.getElementById("add-names-btn").addEventListener("click", event => {
		area.value
				.split(/\r|\r\n|\n/)
				.map(string => string.trim())
				.filter(string => string !== "")
				.forEach(name => createPerson(name));

		hideAddPopup();
		area.value = "";
		resize();
	});

	document.getElementById("close-popup-btn").addEventListener("click", hideAddPopup);
	document.getElementById("add-popup-background").addEventListener("click", hideAddPopup);
}