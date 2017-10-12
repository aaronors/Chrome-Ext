var el = document.getElementById('links');
var sortable = Sortable.create(el,{
	group: "links",
	pull: [true],
	put: [true]
});

var el2 = document.getElementById('now-playing');
var sortable2 = Sortable.create(el2,{
	group: "links",
	pull: [true],
	put: [true]	
});