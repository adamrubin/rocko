// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function sendMessage(obj) {
	// console.log( obj );
	var message = $("#post_message").val();
	console.log("sending message: " + message);
	var client = new Faye.Client(NODE_SERVER + '/faye');
	console.log(client);
	// client.publish('/foo', {text: 'Hi there'});
	client.publish('/foo', message);
	console.log("published...");
	// console.log(message);
}


// $(document).ready(function() {
// 	
// });