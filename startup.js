if (Meteor.isCordova) {
  Meteor.startup(function () {

    //serviceDiscovery.getNetworkServices(service_type, true, success, failure);
    ssdp_find_devices();

  });
}
