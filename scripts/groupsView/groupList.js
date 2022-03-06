function drawGrpList() {
    const container = document.getElementById("group-container");

    while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

    for (const grp of groups) {
        createGrpNode(grp);
    }
    createAddBtnNode();
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

function createAddBtnNode() {
    const node = document.createElement("div");
    node.className = "grp-add-btn-container";
    node.innerHTML = `
        <button class="grp-add-btn">
            <img src="medias/add.png">
        </button>
    `;

    node.addEventListener("click", event => {
        loadGroup(createGroup("nouveau groupe"));
        setTimeout(() => {
            const input = document.getElementById("group-name");
            input.focus();
            input.select();
        }, 500);
    });

    document.getElementById("group-container").appendChild(node);
}