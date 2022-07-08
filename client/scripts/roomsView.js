// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  currentRoom: null,

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.currentRoom = 'Lobby';
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    for (var room in Rooms._data) {
      RoomsView.$select.append($('<option>', {
        value: room,
        text: room
      }));
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    //reset the chat section so we can add all the message with the roomname
    MessagesView.$chats.html('');
    //iterate over the message data in reverse direction
    for (var i = Messages._data.length - 1; i >= 0; i--) {
      if (roomname === Messages._data[i].roomname) {
        MessagesView.renderMessage(Messages._data[i]);
      }
    }

    //compare roomname with current name
    //if equal then render the message data
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    RoomsView.currentRoom = event.target.value;
    RoomsView.renderRoom(RoomsView.currentRoom);
    console.log(RoomsView.currentRoom);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
