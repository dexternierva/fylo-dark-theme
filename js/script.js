const items = document.querySelectorAll('.autoHeight');

/* Equal Height Function */
const autoHeight = function(el) {
	let maxHeight = 0;
	const elements = el.querySelectorAll('.autoHeightItem');

	elements.forEach(function(item) {
		if (item.clientHeight >= maxHeight) {
			maxHeight = item.clientHeight;
		}
	});

	elements.forEach(function(item) {
		item.style.height = maxHeight + 'px';
	});
}

/* Run Equal Height Function for Each Item */
items.forEach((item) => {
	autoHeight(item);
})
