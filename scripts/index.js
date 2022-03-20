window.addEventListener("DOMContentLoaded", event => {

    loadGroupsFromStorage();

    initializeGroupName();
    initializePickBtns();
    initializeOtherBtns();
    initializeAddPopup();
    foldMenu = new FoldMenu();

    drawGrpList();
});