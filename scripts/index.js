window.addEventListener("DOMContentLoaded", event => {

    loadGroupsFromStorage();

    initializeGroupName();
    initializeNameViewBtns();
    initializeAddPopup();
    foldMenu = new FoldMenu();

    drawGrpList();
});