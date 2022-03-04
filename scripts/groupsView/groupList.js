function drawGrpList() {
    const container = document.getElementById("group-container");

    while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

    for (const grp of groups) {
        createGrpNode(grp);
    }
}

function createGrpNode(group) {
    const node = document.createElement("div");
    node.className = "group-card";
    node.innerHTML = `
        <strong class="group-card-text">${group.name}</strong>
    `;

    node.addEventListener("click", event => {
        loadGroup(group);
    });

    document.getElementById("group-container").appendChild(node);
}