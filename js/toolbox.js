var curPage = '#toolbox-page';
var prevPage = '#toolbox-page';

// Wait for device API libraries to load
//
function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

$(document).ready(function() {
	$('#mind-map-tut').on({ 'click' : function(){ 
		$( "#toolbox-page" ).hide();
		$( "#tut-page" ).show();
		curPage = '#tut-page';
		prevPage = '#toolbox-page';
	} });
});

// device APIs are available
//
function onDeviceReady() {
	// Register the event listener
	document.addEventListener("backbutton", onBackKeyDown, false);
}
	
function onBackKeyDown() {
	$(curPage).hide();
	$(prevPage).show();
	
	var temp = curPage;
	curPage = prevPage;
	prevPage = curPage;
}