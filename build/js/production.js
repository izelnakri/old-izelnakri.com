require(['webfont'], function() {
  WebFont.load({
      google: {
        families: ['Lato:400,700:latin']
      },
      custom: {
        families: [ 'icomoon' ],
        urls: [ '/build/css/icons.css']
      }
    });
});

require(['jquery', 'underscore', 'backbone','webfont'], function($, _, Backbone, Webfont) {
  console.log("HELLO WORLD");
});

require(['components','riot'], function(components, riot) {
  //this is necessary for the router
  riot.mount("*");
});
