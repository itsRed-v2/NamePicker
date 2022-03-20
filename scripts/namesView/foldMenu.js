// THIS IS A SINGLETON
class FoldMenu {
	constructor () {
		this.index;

		const container = document.getElementById("fold-menu-container");
		container.addEventListener("click", event => {
			if (event.target === container) this.close(); // we don't want to close if target is a child of container
		});
	
		document.addEventListener("keyup", event => {
			if (event.key === "Escape") this.close();
		});
	
		// move up button
		document.getElementById("move-up-btn").addEventListener("click", event => {
			movePerson(this.index, -1);
			this.index--;
			this.renderBtns();
		});
	
		// move down button
		document.getElementById("move-down-btn").addEventListener("click", event => {
			movePerson(this.index, 1);
			this.index++;
			this.renderBtns();
		});
	
		// passed buttons
		const passedBtnEvent = event => {
			const person = persons[this.index];
			setPassed(person, !person.passed);
			this.renderBtns();
		};
		document.getElementById("set-passed-btn").addEventListener("click", passedBtnEvent);
		document.getElementById("set-not-passed-btn").addEventListener("click", passedBtnEvent);
	
		// remove button
		document.getElementById("remove-btn").addEventListener("click", event => {
			removePerson(this.index);
			this.close();
		});
	}
	
	show(index) {
		this.index = index;
	
		const container = document.getElementById("fold-menu-container");
		const menuNode = document.getElementById("fold-menu");
	
		// positionning
			const menuRect = menuNode.getBoundingClientRect();
			const rect = listNodes[index].getBoundingClientRect();
			let x = rect.right + 10;
			let y = rect.top;  
	
			// moving the menu if it is outside the window
			if (x + menuRect.width > document.body.getBoundingClientRect().right) {
				x = rect.right - menuRect.width;
				y = rect.bottom + 10;
			}
			
			menuNode.style.left = x + "px";
			menuNode.style.top = y + "px";
	
		container.classList.add("show");
	
		this.renderBtns();
	}
	
	renderBtns() {
		// move up & down buttons
		btnSetEnabled(document.getElementById("move-up-btn"), this.index !== 0);
		btnSetEnabled(document.getElementById("move-down-btn"), this.index !== persons.length - 1);
	
		// passed button
		const passed = persons[this.index].passed;
		document.getElementById("set-passed-btn").style.display = passed ? "" : "none";
		document.getElementById("set-not-passed-btn").style.display = passed ? "none" : "";
	}
	
	close() {
		const container = document.getElementById("fold-menu-container");
		if (container.classList.contains("show")) container.classList.remove("show");
	}
}