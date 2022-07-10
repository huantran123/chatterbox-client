// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
    MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    Parse.readAll((data) => {
      for (var i = data.length - 1; i >= 0; i--) {
        MessagesView.renderMessage(data[i]);
      }
      Friends.changeColor();
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var html = '';
    html += MessageView.render(message);
    MessagesView.$chats.prepend(html);
    // return MessageView.render(message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var target = event.target;
    if (target.classList.item(0) !== 'username') {
      return;
    }
    var gitHubHandle = target.classList.item(1);
    if (Friends.isFriend(gitHubHandle)) {
      Friends.removeFriend(gitHubHandle);
      $('#chats > .' + gitHubHandle).removeClass('friend');
    } else {
      Friends.addFriend(gitHubHandle);
    }
  }
};