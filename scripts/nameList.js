window.addEventListener("DOMContentLoaded", event => {
	redrawList();
});

function redrawList() {
	const listContainer = document.getElementById("list-container");

	// emptying everything
	while (listContainer.firstChild) {
		listContainer.removeChild(listContainer.firstChild);
	}

	if (persons.length < 2) pickBtnEnabled(false);
	else pickBtnEnabled(true);

	if (persons.length === 0) {
		const textNode = document.createElement("span");
		textNode.className = "emptyListElement";
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
		node.className = "listRowSelected";
	else
		node.className = "listRow";
	if (person.highlighted)
		node.classList.add("highligthed");

	node.innerHTML = `
		<strong class="listNumber">${index + 1}.</strong>
		<span class="list-text${person.passed ? " passed" : ""}">${person.name}</span>
		<button class="optionsButton">
			<img class="optionsIcon" src="medias/options.png">
		</button>
	`;

	// options button (3dots button)
	let optionsButton = node.getElementsByClassName("optionsButton")[0];
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
		list.className = "nameList";
		listContainer.appendChild(list);
	}

	list.appendChild(node);
}