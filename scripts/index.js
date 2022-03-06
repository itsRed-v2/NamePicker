window.addEventListener("DOMContentLoaded", event => {

    loadGroupsFromStorage();

    initializeGroupName();
    initializeNameInput();
    initializePickBtns();
    initializeBackBtn();
    initializeDeleteGrpBtn();

    drawGrpList();

});