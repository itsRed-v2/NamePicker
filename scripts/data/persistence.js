function loadGroupsFromStorage() {
	groups = JSON.parse(localStorage.getItem("groups"));
	if (!groups) groups = [];

	loadGroup(groups[0]); // temporary
}

function saveGroups() {
    function replacer(key, value) {
        if ((key === "passed" && value === false)
                || key === "highlighted"
                || key === "selected")
            return undefined;
        return value;
    }

    localStorage.setItem("groups", JSON.stringify(groups, replacer));
}