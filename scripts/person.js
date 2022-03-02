class Person {
	constructor(name) {
		this.name = name;
		this.highlighted = false;
		this.selected = false;
		this.passed = false;
	}
}

const persons = [];

function select(person) {
	for (let person of persons) {
		person.selected = false;
	}
	if (person) person.selected = true;
}

function highlight(person) {
	for (let person of persons) {
		person.highlighted = false;
	}
	if (person) person.highlighted = true;
}

function getNonPassed() {
	return persons.filter(person => !person.passed);
}