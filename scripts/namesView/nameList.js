function redrawList() {
	const listContainer = document.getElementById("list-container");
	const info = document.getElementById("pick-info-bubble");

	// emptying everything
	while (listContainer.firstChild) {
		listContainer.removeChild(listContainer.firstChild);
	}

	if (persons.length === 0) {
		info.textContent = "La liste est vide !";

		const textNode = document.createElement("span");
		textNode.className = "empty-list-element";
		textNode.textContent = "Cette liste est vide :'(";
		
		addPersonNode(textNode);
	} else {
		info.textContent = "Tout le monde est passé !";
		
		for (let personIndex = 0; personIndex < persons.length; personIndex++) {	
			createPersonNode(personIndex);
		}
	}

	const passedAmount = getNonPassed().length;
	pickBtnSetEnabled(passedAmount !== 0);
	setMarkallButtonVisibility(passedAmount === 0 && persons.length !== 0);
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
			select(person);
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