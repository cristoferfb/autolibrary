function goTo (name) {
	hideAll()
	// reveal only the selected view
	$("#"+name).css("display", "block")
}

function hideAll () {
	// styles of  login
	$("body").css("display", "block")
	$("body").css("align-items", "left")
	// hide all views
	$('#login').css("display", "none")
	$('#admin').css("display", "none")
	$('#user').css("display", "none")
}

function evaluateLogin () {
	// Evaluate login
	goTo("user")
}