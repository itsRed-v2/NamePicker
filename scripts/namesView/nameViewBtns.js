function initializeNameViewBtns() {
    document.getElementById("back-btn").addEventListener("click", event => {
        showGroupList();
    });

    document.getElementById("markall-btn").addEventListener("click", event => {
        setAllPassed(false);
        highlight(undefined);
    });

    document.getElementById("delete-grp-btn").addEventListener("click", event => {
        deleteGroup(currentGroup);
        drawGrpList();
        showGroupList();
    });

	document.getElementById("random-pick-btn").addEventListener("click", event => {
		const nonPassed = getNonPassed();
		const picked = nonPassed[Math.floor(Math.random() * nonPassed.length)];

		highlight(picked);
		setPassed(picked, true);
	});
}

function setMarkallButtonVisibility(boolean) {
    document.getElementById("markall-btn").style.visibility = boolean ? "visible" : "hidden";
}

function pickBtnSetEnabled(boolean) {
	btnSetEnabled(document.getElementById("random-pick-btn"), boolean);
}