// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},
  _oldData: {},
  _diffData: {},
  $select: $('#rooms select'),

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  //method to update roomnames
  _updateRoom: function (data) {
    // Rooms._oldData = JSON.parse(JSON.stringify(Rooms._data));
    // for (var room in Rooms._data) {
    //   Rooms._oldData[room] = Rooms._data[room];
    // }
    _.extend(Rooms._oldData, Rooms._data);
    Rooms._data = {};
    //iterate over datalist for each
    _.each(data, function(element) {
      Rooms._data[element.roomname] = element.roomname;
    });

    if (Object.keys(Rooms._data).length !== Object.keys(Rooms._oldData).length) {
      for (var room in Rooms._data) {
        if (Rooms._oldData[room] === undefined) {
          Rooms._diffData[room] = room;
        }
      }
    } else {
      Rooms._diffData = {};
    }

    // Update room dropdown
    if (Object.keys(Rooms._diffData).length !== 0) {
      for (var room in Rooms._diffData) {
        RoomsView.$select.append($('<option>', {
          value: room,
          text: room
        }));
      }
    }

  }

  //
};