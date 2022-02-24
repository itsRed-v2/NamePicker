function moveInArray(array, index, offset) {
	if (index === 0 && offset < 0) return;
	array.splice(index + offset, 0, array.splice(index, 1)[0]);
}

function removeAllEventListeners(node) {
	let new_node = node.cloneNode(true);
	node.parentNode.replaceChild(new_node, node);
}