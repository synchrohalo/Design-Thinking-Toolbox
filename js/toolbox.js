var curPage = '#toolbox-page';
var prevPage = '#toolbox-page';


$(document).ready(function() {
	$('#mind-map').on({ 'click' : function(){ 
		$( "#toolbox-page" ).hide();
		$( "#tut-page" ).show("fast");
		curPage = '#tut-page';
		prevPage = '#toolbox-page';
	} });
});

/*function showScreen(){
      $(curPage).hide();
      $(".screen").show();
      $(document).on("backbutton", onBackButton);
}*/

function hideScreen(){
      $(curPage).hide();
      $(prevPage).show();
      $(document).off("backbutton", onBackButton);
}

function onBackButton(){
      hideScreen();
	  var temp = curPage;
	  curPage = prevPage;
	  prevPage = temp;
}