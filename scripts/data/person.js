let persons = [];

function createPerson(name) {
	const pers = {
		name: name
	};
	persons.push(pers);
	saveGroups();
	redrawList();	
	return pers;
}

function select(person) {
	for (let person of persons) {
		person.selected = false;
	}
	if (person) person.selected = true;

	redrawList();
}

function highlight(person) {
	for (let person of persons) {
		person.highlighted = false;
	}
	if (person) person.highlighted = true;

	redrawList();
}

function setPassed(person, boolean) {
	person.passed = boolean;
	saveGroups();
	redrawList();
}

function removePerson(index) {
	persons.splice(index, 1);
	saveGroups();
	redrawList();
}

function movePerson(personIndex, offset) {
	moveInArray(persons, personIndex, offset);
	saveGroups();
	redrawList();
}

function getNonPassed() {
	return persons.filter(person => !person.passed);
}