let rolledIndex;

function startRoll() {
	const rollList = document.createElement("div");
	rollList.id = "roll-list";
	rollList.className = "roll-list";

	document.getElementById("roll-zone").appendChild(rollList);

	for (let i = 0; i < 99; i++) {
		const span = document.createElement("span");
		span.textContent = persons[Math.floor(Math.random() * persons.length)].name;
		rollList.appendChild(span);
	}	

	const nonPassedList = getNonPassed();
	rolledIndex = Math.floor(Math.random() * nonPassedList.length);
	const rolledPerson = nonPassedList[rolledIndex];

	const lastSpan = document.createElement("span");
	lastSpan.textContent = rolledPerson.name;
	rollList.appendChild(lastSpan);

	setTimeout(() => rollList.style.transform = "translateY(-100%)", 300);

	setTimeout(() => {
		resizeToFit(rollList.lastChild);
		setSelectorBtnsVisible(true);
	}, 6000);
}

async function resizeToFit(span) {	
	if (span.clientWidth === span.scrollWidth) return;

	if (!span.textContent) span.textContent = "A";
	
	const style = span.style;
	style.whiteSpace = "normal";

	let size;

	while (span.clientHeight < span.scrollHeight) {
		const fontSize = window.getComputedStyle(span, null).getPropertyValue("font-size");
		size = parseFloat(fontSize) - 1;

		style.fontSize = size + "px";

		await new Promise(resolve => setTimeout(resolve, 5));
	}
	
	return size;
}