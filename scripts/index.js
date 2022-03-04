window.addEventListener("DOMContentLoaded", event => {

    loadGroupsFromStorage();

    initializeGroupName();
    initializeNameInput();
    initializePickBtns();

	redrawList();

});