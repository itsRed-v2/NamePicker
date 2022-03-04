function showGroupList() {
    drawGrpList();
    document.getElementById("groups-section").classList.remove("slide-up");
    document.getElementById("names-section").classList.remove("slide-up");
}

function showNameList() {
    document.getElementById("groups-section").classList.add("slide-up");
    document.getElementById("names-section").classList.add("slide-up");
}