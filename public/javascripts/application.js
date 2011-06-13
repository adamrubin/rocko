var client = null
var subscription = null;

$(document).ready(function() {
	client = new Faye.Client(NODE_SERVER + '/faye');	
	subscription = client.subscribe('/foo', function(message) {
		$("#messages ul").prepend("<li>" + message + "</li>");
	});
})

function sendMessage(obj) {
	var message = $("#post_message").val();
	client.publish('/foo', message);
	$("#post_message").val("");

	return false;
}
