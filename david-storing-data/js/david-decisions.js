// Listen for a click on the yes and no buttons
$('.btn-success').click(processDecision);
$('.btn-danger').click(processDecision);
// A function to run when .btn-success or .btn-danger is clicked
function processDecision() {

	// n.b added data-answer="yes" to the yes button and "no" to the no button
	// <button class="btn btn-success" data-answer="yes">Yes</button>
	// $(this) is a reference to the button we clicked on
	// so if we clicked on .btn-success then $('btn-success') === $(this)
	var answer = $(this).attr('data-answer');
	console.log(answer);
	ajax(answer);
	if (answer === "yes"){
		alert("David will now strip for you (•_•) ( •_•)>⌐■-■ (⌐■_■)")
	} else {
		alert("David is going home ▄︻̷̿┻̿═━一 (ಥ﹏ಥ)")
	}
	showView('.view-default');
}
