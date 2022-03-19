window.addEventListener("DOMContentLoaded", event => {

    loadGroupsFromStorage();

    initializeGroupName();
    initializePickBtns();
    initializeOtherBtns();
    initFoldMenuEvents();
    initializeAddPopup();

    drawGrpList();
});