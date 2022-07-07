// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    $.ajax({
      // This is the url you should use to communicate with the API server.
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB || function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Message sent');
      },
      error: errorCB || function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};