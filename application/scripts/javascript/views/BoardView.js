(function () {

  define(['backbone', 'jquery', 'cache'], function (Backbone, $, cache) {
    return {
      el: cache.$board({
        initialize: function () {
          return this.render();
        },
        render: function () {
          var dimensions;
          dimensions = this.getDimensions();
          return this.paper = Raphael(this.el, cache.$window.width, cache.$window.height);
        }
      })
    };
  });

}).call(this);