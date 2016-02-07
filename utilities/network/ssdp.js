// Global
ssdp_find_devices = function () {
  var service_type = "ssdp:all";

  function success (devices) {
    console.log('Devices found:', devices);
    Session.set('devices_found', devices);
  }

  function failure () {
    console.log('No devices found.');
    Session.set(null);
  }

  console.log('Starting SSDP poll...');
  cordova.exec(
    success,
    failure,
    'serviceDiscovery',
    'getNetworkServices',
    [service_type]
  );

}
