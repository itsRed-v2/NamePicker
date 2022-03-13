function initializeOtherBtns() {
    document.getElementById("back-btn").addEventListener("click", event => {
        showGroupList();
    });

    document.getElementById("markall-btn").addEventListener("click", event => {
        setAllPassed(false);
    });

    document.getElementById("delete-grp-btn").addEventListener("click", event => {
        deleteGroup(currentGroup);
        drawGrpList();
        showGroupList();
    });
}

function setMarkallButtonVisibility(boolean) {
    document.getElementById("markall-btn").style.visibility = boolean ? "visible" : "hidden";
}