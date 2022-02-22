const names = [
	"Niam Barrow",
	"Elsa Atkinson",
	"Cecelia Andrew",
	"Ashleigh Pitts",
	"Arandeep Oneil",
	// "nom vraiment vraiment très très long",
	"Indigo Dodson",
	"Blanka Leonard",
	"Amos Thomas",
	"Daria Wills",
	"Tala Watts",
	"Johan Brooks",
	"Louie Whitaker",
	"Nyla Riddle",
	"Charlize Roman",
	"Lily-Mai Calderon",
];

let selected = undefined;

window.addEventListener("DOMContentLoaded", (event) => {

	const nameInput = document.getElementById("nameInput");

	// add button
	document.getElementById("addName").addEventListener("click", (event) => {
		addName(nameInput);
	});

	// press enter to add
	nameInput.addEventListener("keyup", (event) => {
		if (event.key === "Enter") {
			addName(nameInput);
		}
	});

	redrawList(names);

});

function addName(nameInput) {
	const name = nameInput.value;
	nameInput.value = "";

	if (name == "") return;
	
	names.push(name)
	redrawList(names);	
}

function redrawList() {
	const listContainer = document.getElementById("list-container");

	while (listContainer.firstChild) {
		listContainer.removeChild(listContainer.firstChild);
	}

	if (names.length === 0) {
		const textNode = document.createElement("span");
		textNode.className = "emptyListElement";
		textNode.appendChild(document.createTextNode("Cette liste est vide :'("));
		
		addToList(textNode, listContainer, 0);

	} else {
		for (let i = 0; i < names.length; i++) {	
			const name = names[i];

			const node = document.createElement("li");
			if (selected === i) node.className = "listRowSelected";
			else node.className = "listRow";

			node.innerHTML = `
				<strong class="listNumber">${i + 1}.</strong>
				<span class="listText">${name}</span>
				<button class="optionsButton">
					<img class="optionsIcon" src="medias/options.png">
				</button>
			`;
			
			let optionsButton = node.getElementsByClassName("optionsButton")[0];

			// select on click
			node.addEventListener("click", (event) => {
				if (selected === i && !optionsButton.contains(event.target)) selected = undefined;
				else selected = i;
				redrawList();
			});

			// options button (3dots button)
			optionsButton.addEventListener("click", (event) => {

				const rect = node.getBoundingClientRect();
				showFoldMenu(rect.right + 10, rect.bottom, i);
				
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