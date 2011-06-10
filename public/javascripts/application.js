var client = null

// $(document).ready(function() {
// 	client = new Faye.Client(NODE_SERVER + '/faye');	
// })


function sendMessage(obj) {
	var message = $("#post_message").val();
	client.publish('/foo', message);
	$("#post_message").val("");
	return false;
}
