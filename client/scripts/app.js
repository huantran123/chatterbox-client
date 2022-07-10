// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),


  username: 'anonymous',

  initialize: function() {
    window.alert = function() {};
    App.username = window.location.search.substr(10);

    FormView.initialize();
    MessagesView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(function() {
      App.fetch(App.stopSpinner);
      window.alert = function() {};
      Friends.changeColor();
      // console.log(Messages._data);
      // console.log(Rooms._data);
      // console.log(Friends._data);

    }, 1000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      callback();

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      Messages._updateMessages(data);
      Rooms._updateRoom(data);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
