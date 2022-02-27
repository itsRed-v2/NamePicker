window.addEventListener("DOMContentLoaded", event => {
	redrawList();
});

function redrawList() {
	const listContainer = document.getElementById("list-container");

	// emptying everything
	while (listContainer.firstChild) {
		listContainer.removeChild(listContainer.firstChild);
	}

	if (persons.length < 2) pickBtnSetEnabled(false);
	else pickBtnSetEnabled(true);

	if (persons.length === 0) {
		const textNode = document.createElement("span");
		textNode.className = "empty-list-element";
		textNode.appendChild(document.createTextNode("Cette liste est vide :'("));
		
		addPersonNode(textNode);
	} else {
		for (let personIndex = 0; personIndex < persons.length; personIndex++) {	
			createPersonNode(personIndex);
		}
	}
}

function createPersonNode(index) {
	const person = persons[index];

	const node = document.createElement("li");
	if (person.selected)
		node.className = "list-row-selected";
	else
		node.className = "list-row";
	if (person.highlighted)
		node.classList.add("highligthed");
	if (person.passed)
		node.classList.add("passed");

	node.innerHTML = `
		<strong class="list-number">${index + 1}.</strong>
		<span class="list-text">${person.name}</span>
		<button class="options-button">
			<img class="options-icon" src="medias/options.png">
		</button>
	`;

	// options button (3dots button)
	let optionsButton = node.getElementsByClassName("options-button")[0];
	optionsButton.addEventListener("click", event => {
		showFoldMenu(node, index);
	});

	// select on click
	node.addEventListener("click", event => {
		if (person.selected && !optionsButton.contains(event.target))
			select(undefined);
		else
			select(index);
		redrawList();
	});

	// adding to the list
	addPersonNode(node);
}

function addPersonNode(node) {
	const listContainer = document.getElementById("list-container");

	let list = listContainer.lastChild;

	if (!list || list.childNodes.length >= 10) {
		list = document.createElement("ul");
		list.className = "name-list";
		listContainer.appendChild(list);
	}

	list.appendChild(node);
}