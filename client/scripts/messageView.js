// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(
    '<div class = "chat">' +
      '<h3 class = "username">' +
        '<%= username %> :' +
      '</h3>' +
      '<p class = "message-text">' +
        '<%= text %>' +
      '</p>' +
    '</div>'
  )
};