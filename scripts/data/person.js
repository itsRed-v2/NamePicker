let persons = [];

function createPerson(name) {
	const pers = {
		name: name
	};
	persons.push(pers);
	saveGroups();
	return pers;
}

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

function setPassed(person, boolean) {
	person.passed = boolean;
	saveGroups();
}

function togglePassed(person) {
	person.passed = !person.passed;
	saveGroups();
}

function removePerson(index) {
	persons.splice(index, 1);
	saveGroups();
}

function movePerson(personIndex, offset) {
	moveInArray(persons, personIndex, offset);
	saveGroups();
}

function getNonPassed() {
	return persons.filter(person => !person.passed);
}