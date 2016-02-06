var login = require("facebook-chat-api");
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

  // // messages, username, chat id are Strings, otherUsernames is array of Strings
  // function read(message, username, thread_id, userId, otherUsernames, otherIds, callback) {
  //   // Default chat object or existing one
  //   // And set the global object
  //   currentChat = chats[thread_id] = chats[thread_id] || {
  //     lists: {},
  //     scores: {},
  //     existingChat: false
  //   };
  //   if(!currentChat.lists) currentChat.lists = {};
  //   if(!currentChat.scores) currentChat.scores = {};
  //   if(!currentChat.reminders) currentChat.reminders = [];
  //   if(!users[userId]) users[userId] = {};

    
  //   currentThreadId = thread_id;
  //   currentUserId = userId;
  //   currentUsername = username;
  //   currentOtherUsernames = otherUsernames;

  //   // Remove one Marc
  //   if(currentOtherUsernames.indexOf("Marc") !== -1) {
  //     currentOtherUsernames.splice(currentOtherUsernames.indexOf("Marc"), 1);
  //   }

  //   // Remove marc from this list
  //   currentOtherIds = otherIds.filter(function(v) {return v !== MARC_ID;});

  //   var availableCommands = allCommands.default;
  //   // if we have data for the user, and he has talked in this current chat
  //   // and his state isn't null, then we use the appropriate set of commands
  //   // for the given state
  //   if(users[currentUserId] && users[currentUserId][thread_id] && users[currentUserId][thread_id].state) {
  //     availableCommands = allCommands[users[currentUserId][thread_id].state];
  //   }


login({email: "alexyuiop@gmail.com", password: "tartanhacks"}, function callback (err, api) {
    if(err) return console.error(err);
    console.log(":O");
 
    api.getUserID("Alex Yeh", function(err, data) {
    	if(err) return callback(err);

    	// if (!currentChat.existingChat){
     //  		currentChat.existingChat = true;
     //  		api.sendMessage("Hey I'm a chatbot and here to help. Type '/help' for some useful commands!", thread_id);
    	// }
    	
        // Send the message to the best match (best by Facebook's criteria)
        var threadID = data[0].userID;
        api.sendMessage("eeeeeeeeee", threadID);
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




