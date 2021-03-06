function initializeNameViewBtns() {
    document.getElementById("back-btn").addEventListener("click", event => {
        pageManager.showGroupList();
    });

    document.getElementById("markall-btn").addEventListener("click", event => {
        setAllPassed(false);
        highlight(undefined);
    });

    document.getElementById("delete-grp-btn").addEventListener("click", event => {
        deleteGroup(currentGroup);
        pageManager.showGroupList();
    });

	document.getElementById("random-pick-btn").addEventListener("click", event => {
        pageManager.showSelector();
        startRoll();
        document.activeElement.blur();
	});
}

function setMarkallButtonVisibility(boolean) {
    document.getElementById("markall-btn").style.visibility = boolean ? "visible" : "hidden";
}

function pickBtnSetEnabled(boolean) {
	btnSetEnabled(document.getElementById("random-pick-btn"), boolean);
}