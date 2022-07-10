// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    Parse.readAll((data) => {
      for (var i = data.length - 1; i >= 0; i--) {
        MessagesView.renderMessage(data[i]);
      }
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
  }
};