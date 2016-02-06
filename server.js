var login = require("facebook-chat-api");
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

login({email: "alexyuiop@gmail.com", password: "tartanhacks"}, function callback (err, api) {
    if(err) return console.error(err);
    console.log(":O");
 
    api.getUserID("Alex Yeh", function(err, data) {
    	if(err) return callback(err);

        // Send the message to the best match (best by Facebook's criteria)
        var threadID = data[0].userID;
        api.sendMessage("hi", threadID);
    });

    api.setOptions({listenEvents: true});
 	var coins = 0;
 	var slient = false;
    var stopListening = api.listen(function(err, event) {
    	if(err) return console.error(err);
	 	console.log(event);
	    switch(event.type) {
	    	case "message":
	          	var call = event.body.substring(0, 6);
	          	var text_string = event.body.replace("Alfred ", "");
	          	if (call == "Alfred" || call == "alfred") {
		            if(text_string === 'shut up' || text_string == 'stop' && !slient) {
		              api.sendMessage("Ok see you later", event.threadID);
		              slient = true;
		            } else if(text_string === 'start listening' || text_string == 'start') {
		              api.sendMessage("Hello I'm the Alfred chat bot.", event.threadID);
		              slient = false;
		            }
		        } 
		        else {
		        	if (!slient) {
			            if(event.body == '/add coin') {
			            	coins++;
			              	api.sendMessage("I now have " + coins + "! I am rich.", event.threadID);
			            } else if(event.body === '/takeaway coin') {
			            	coins--;
			              	api.sendMessage("I now have " + coins + "! I am poor.", event.threadID);
			            } else {
			            	api.markAsRead(event.threadID, function(err) {
			              		if(err) console.log(err);
			            	});
			            	api.sendMessage(event.body, event.threadID);
			            }
			        }
		        }
		        break;
	        case "event":
	          	api.sendMessage("Hey I'm a chatbot and here to help. Type '/help' for some useful commands!", thread_id);
	            console.log(event);
	            break;
	    }
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




