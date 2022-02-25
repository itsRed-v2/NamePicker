/**
 * Moves an element of an array forwards of backwards
 * @param {Array} array The array
 * @param {number} index The index of the element to move
 * @param {number} offset Hom much should the element move towards the end of the array
 */
function moveInArray(array, index, offset) {
	if (index === 0 && offset < 0) return;
	array.splice(index + offset, 0, array.splice(index, 1)[0]);
}

/**
 * Removes all event listeners from a node
 * @param {Node} node The node to clear all events listeners
 */
function removeAllEventListeners(node) {
	let new_node = node.cloneNode(true);
	node.parentNode.replaceChild(new_node, node);
}

/**
 * @param {Node} btn The button to enable/disable
 * @param {Boolean} enabled The boolean that determines if the button must be enabled or disabled
 */
function btnEnabled(btn, enabled) {
	if (enabled) btn.removeAttribute("disabled");
	else btn.setAttribute("disabled", "true");
}