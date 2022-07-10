// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms #add-room-btn'),
  $addRoomForm: $('#add-room-form'),
  $select: $('#rooms select'),
  currentRoom: null,

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.currentRoom = 'All Messages';
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$addRoomForm.on('submit', RoomsView.handleSubmit);
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
      // if (roomname === 'All') {
      //   MessagesView.renderMessage(Messages._data[i]);
      // } else if (roomname === Messages._data[i].roomname) {
      //   MessagesView.renderMessage(Messages._data[i]);
      // }
      if (roomname === 'All Messages') {
        MessagesView.renderMessage(Messages._data[i]);
      } else if (roomname === Messages._data[i].roomname) {
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
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    RoomsView.openPopUp();
  },

  openPopUp: function() {
    document.getElementById('popupForm').style.display = 'block';
  },

  closePopUp: function() {
    document.getElementById('popupForm').style.display = 'none';
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var textField = document.getElementById('roomname');
    var roomname = textField.value;
    var username = App.username;
    var text = username + ' created room ' + roomname;
    var message = {username, text, roomname};
    Parse.create(message);
    RoomsView.closePopUp();
    App.startSpinner();
  }


};
