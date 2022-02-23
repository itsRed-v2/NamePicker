class Person {
	constructor(name) {
		this.name = name;
		this.highlighted = false;
		this.selected = false;
		this.passed = false;
	}
}

const persons = [];

for (const name of [
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
]) {
	persons.push(new Person(name));
}

function select(index) {
	for (let person of persons) {
		person.selected = false;
	}
	if (persons[index]) persons[index].selected = true;
}

function getSelected() {
	for (let i = 0; i < persons.length; i++) {
		if (persons[i].selected) return i;
	}
}

function highlight(index) {
	for (let person of persons) {
		person.highlighted = false;
	}
	if (persons[index]) persons[index].highlighted = true;
}