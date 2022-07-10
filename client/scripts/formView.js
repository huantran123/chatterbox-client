// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('#send'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var textField = document.getElementById('message');
    var text = textField.value;
    var username = App.username;
    var roomname = (RoomsView.currentRoom === 'All Messages') ? null : RoomsView.currentRoom;
    var mess = {username, text, roomname};

    Parse.create(mess);

    textField.value = '';
    App.startSpinner();
    // App.fetch(App.stopSpinner);

    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};