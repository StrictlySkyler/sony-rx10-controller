if (Meteor.isCordova) {

  Tracker.autorun(function () {

    if (Session.get('devices_found').length > 0) {
      debugger;
      // Enumerate and do useful things here
    }
  });
}
