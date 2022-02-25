window.addEventListener("DOMContentLoaded", event => {
	
	const nameInput = document.getElementById("nameInput");

	// add button
	document.getElementById("addName").addEventListener("click", (event) => {
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
		
		persons.push(new Person(name));
		redrawList();	
	}
});