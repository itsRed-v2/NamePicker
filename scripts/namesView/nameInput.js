function initializeNameInput() {
	
	const nameInput = document.getElementById("name-input");

	// add button
	document.getElementById("add-name-btn").addEventListener("click", (event) => {
		addPerson(nameInput);
	});

	// press enter to add
	nameInput.addEventListener("keyup", (event) => {
		if (event.key === "Enter") {
			addPerson(nameInput);
		}
	});

	function addPerson(nameInput) {
		const name = nameInput.value.trim();
		nameInput.value = "";
	
		if (name == "") return;
		
		createPerson(name);
	}
}