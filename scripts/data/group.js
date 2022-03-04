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
}

function loadGroupByName(name) {
    for (const grp of groups) {
        if (grp.name === name) {
            loadGroup(grp);
            return grp;
        }
    }
}