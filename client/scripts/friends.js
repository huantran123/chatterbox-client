// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},
  changeColor: function() {
    for (var friend in Friends._data) {
      $('#chats > .' + friend).addClass('friend');
    }
  },
  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  addFriend: function(user) {
    Friends._data[user] = user;
  },
  removeFriend: function(user) {
    delete Friends._data[user];
  },
  isFriend: function(user) {
    //if user is in friend list return true
    if (Friends._data[user] !== undefined) {
      return true;
    } else {
      return false;
    }
    //otherwise return false
  }
};