// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function sendMessage(obj) {
	// console.log( obj );
	var message = $("#post_message").val();
	var client = new Faye.Client(NODE_SERVER + '/faye');
	client.publish('/foo', message);
	$("#post_message").val("");
	return false;
}


// $(document).ready(function() {
// 	
// });