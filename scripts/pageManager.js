const pageManager = new class {
    showGroupList() {
        drawGrpList();

        this.#show("groups-section");
    
        this.#slideDown("names-section");
        this.#slideDown("selector-section");
    }
    showNameList() {
        this.#show("names-section");

        this.#slideDown("selector-section");
        this.#hide("groups-section");
    }
    showSelector() {
        this.#show("selector-section");
    
        this.#hide("names-section");
        this.#hide("groups-section");
    }

    #show(id) {
        const classList = document.getElementById(id).classList;
        classList.remove("hide");
        classList.remove("slide-down");
    }

    #slideDown(id) {
        document.getElementById(id).classList.add("slide-down");
    }

    #hide(id) {
        document.getElementById(id).classList.add("hide");
    }
}