class Person {
	constructor(name) {
		this.name = name;
		this.highlighted = false;
		this.selected = false;
		this.passed = false;
	}
}

const persons = [];

function select(index) {
	for (let person of persons) {
		person.selected = false;
	}
	if (persons[index]) persons[index].selected = true;
}

function highlight(index) {
	for (let person of persons) {
		person.highlighted = false;
	}
	if (persons[index]) persons[index].highlighted = true;
}