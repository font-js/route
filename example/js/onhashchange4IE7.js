/**
 * onhashchange4IE7.js
 * @authors Qv (foru.fy@gmail.com)
 * @date    2015-03-16 19:35:20
 * @version 0.0.1
 */
! function(window,document) {
  if (!('addEventListener' in document.createElement('div'))) {
    var location = window.location,
      oldURL = location.href,
      oldHash = location.hash;

    // check the location hash on a 100ms interval
    setInterval(function() {
      var newURL = location.href,
        newHash = location.hash;

      // if the hash has changed and a handler has been bound...
      if (newHash != oldHash && typeof window.onhashchange === 'function') {
        // execute the handler
        window.onhashchange({
          type: 'hashchange',
          oldURL: oldURL,
          newURL: newURL
        });

        oldURL = newURL;
        oldHash = newHash;
      }
    }, 100);
  }
}(window,document);