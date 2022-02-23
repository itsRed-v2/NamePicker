window.addEventListener("DOMContentLoaded", (event) => {

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

	redrawList();
});

function addPerson(nameInput) {
	const name = nameInput.value;
	nameInput.value = "";

	if (name == "") return;
	
	persons.push(new Person(name));
	redrawList();	
}

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
		
		addToList(textNode, listContainer, 0);

	} else {
		for (let i = 0; i < persons.length; i++) {	
			const person = persons[i];

			const node = document.createElement("li");
			if (person.selected) node.className = "listRowSelected";
			else node.className = "listRow";
			if (person.highlighted) node.classList.add("highligthed");

			node.innerHTML = `
				<strong class="listNumber">${i + 1}.</strong>
				<span class="list-text${person.passed ? " passed" : ""}">${person.name}</span>
				<button class="optionsButton">
					<img class="optionsIcon" src="medias/options.png">
				</button>
			`;
			
			// options button (3dots button)
			let optionsButton = node.getElementsByClassName("optionsButton")[0];
			optionsButton.addEventListener("click", event => {
				showFoldMenu(node, i);
			});	

			// select on click
			node.addEventListener("click", (event) => {
				if (person.selected && !optionsButton.contains(event.target)) select(undefined);
				else select(i);
				redrawList();
			});

			// adding to the multi-column list
			const listIndex = Math.floor(i/10);
			addToList(node, listContainer, listIndex);
		}
	}
}

function addToList(htmlNode, listContainer, listIndex) {
	const list = getList(listContainer, listIndex);
	list.appendChild(htmlNode);
}

function getList(listContainer, index) {
	const childNodes = listContainer.childNodes;
	if (index < childNodes.length && childNodes[index]) {
		return childNodes[index];
	} else {
		const list = document.createElement("ul");
		list.className = "nameList";
		listContainer.appendChild(list);
		return list;
	}
}