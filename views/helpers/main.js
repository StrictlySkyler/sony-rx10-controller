if (Meteor.isCordova) {
  Template.device_discovery.helpers({

    devices_found: function () {
      return Session.get('devices_found');
    }

  });
}
