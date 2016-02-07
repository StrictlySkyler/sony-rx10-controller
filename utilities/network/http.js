function simple_request (method, url, params, success, failure) {

  function _success (response) {
    Session.set('http_latest_response', response);

    if (typeof success == 'function') { success(response); }
  }

  function _failure (error) {
    Session.set('http_latest_response', response);

    if (typeof failure == 'function') { failure(response); }
  }

  var auth = {};

  params = params || {};

  cordovaHTTP[method](url, params, auth, _success, _failure);
}

// Global
http = {

  get: simple_request.bind(null, 'get'),

  post: simple_request.bind(null, 'post')

}
