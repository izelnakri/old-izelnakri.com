require(['jquery', 'underscore', 'backbone','webfont'], function($, _, Backbone, Webfont) {
  console.log("HELLO WORLD");
})

require(['components','riot'], function(components, riot) {
  //this is necessary for the router
  riot.mount("*");
})

