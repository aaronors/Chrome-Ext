var el = document.getElementById('links');
var sortable = Sortable.create(el,{
	group: "links",
	pull: [true],
	put: [true],
	setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
	dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
	},

});

var el2 = document.getElementById('now-playing');
var sortable2 = Sortable.create(el2,{
	group: "links",
	pull: [true],
	put: [true],
	setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
		dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
	}


});