function initializeGroupName() {
    const name = document.getElementById("group-name");

    name.addEventListener("focusout", event => {
        currentGroup.name = name.value;
        saveGroups();
    });

	name.addEventListener("keyup", event => {
		if (event.key === "Enter") {
			currentGroup.name = name.value;
            name.blur();
            saveGroups();
		}
	});

    name.addEventListener("keyup", event => {
		if (event.key === "Escape") {
			name.value = currentGroup.name;
            name.blur();
		}
	});
}

function displayGroupName(group) {
    document.getElementById("group-name").value = group.name;
}