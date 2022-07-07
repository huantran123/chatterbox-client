// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],
  _oldData: [],
  _diffData: [],


  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  _add: function(message) {
    _data.push(message);
  },
  // _retrieve: function () {}
  // .appendTo($('_data'))
  _updateMessages: function(messages) {
    Messages._oldData = [...Messages._data];
    Messages._data = [];
    messages.forEach(function(message) {
      Messages._data.push(message);
    });
    if (Messages._oldData.length !== 0) {
      var index = Messages._data.findIndex(data => data.message_id === Messages._oldData[0].message_id);
    } else {
      var index = 0;
    }

    if (index !== 0) {
      for (var i = 0; i < index; i++) {
        Messages._diffData.push(Messages._data[i]);
      }
    } else {
      Messages._diffData = [];
    }

  }
};