window.addEventListener("DOMContentLoaded", event => {

    loadGroupsFromStorage();

    initializeGroupName();
    initializeNameInput();
    initializePickBtns();
    initializeOtherBtns();
    initFoldMenuEvents();

    drawGrpList();

});