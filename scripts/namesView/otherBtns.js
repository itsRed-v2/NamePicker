function initializeBackBtn() {
    document.getElementById("back-btn").addEventListener("click", event => {
        showGroupList();
    });
}

function initializeDeleteGrpBtn() {
    document.getElementById("delete-grp-btn").addEventListener("click", event => {
        deleteGroup(currentGroup);
        drawGrpList();
        showGroupList();
    });
}