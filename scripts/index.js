window.addEventListener("DOMContentLoaded", event => {

    loadGroupsFromStorage();

    initializeGroupName();
    initializeNameViewBtns();
    initializeSelectorBtns();
    initializeAddPopup();
    foldMenu = new FoldMenu();

    drawGrpList();
});