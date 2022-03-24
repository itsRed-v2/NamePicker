let groups = [];
let currentGroup;

function createGroup(name, persons = []) {
    const grp = {
        name: name,
        persons: persons
    }
    groups.push(grp);
    saveGroups();
    return grp;
}

function loadGroup(group) {
    persons = group.persons;
    currentGroup = group;
    displayGroupName(group);

    redrawList();
    pageManager.showNameList();
}

function loadGroupByName(name) {
    for (const grp of groups) {
        if (grp.name === name) {
            loadGroup(grp);
            return grp;
        }
    }
}

function deleteGroup(group) {
    const index = groups.indexOf(group);
    groups.splice(index, 1);
	saveGroups();
}