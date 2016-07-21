/*

  showView

  accepts the class name of a view you wish to show
  hides all views, and then shows the view you passed it

  Example use:

  showView('.view-checkin');
*/

function showView(viewName) {
  $('.view').hide();
  $(viewName).show();
}
/*

  ajax

  accepts the data value you wish store

  Example:

  ajax("clickedYes");
 */

function ajax(data) {
  $.ajax({
  	url: "https://api.decoded.com/store/the-david-app-store/",
  	data: {
  		ajaxSubmitted: data
  	},
  	success: function(result){
      console.log(result);
    } // END of sucess function
  });
}