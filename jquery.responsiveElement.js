;(function($) {

  var plugin = {};

  // Set the default values
  var defaults = {
    rules: [
      '750,responsive-lg',
      '617,responsive-md',
      '470,responsive-sm',
      '0,responsive-xs'
    ]
  };

  $.fn.responsiveElement = function(options) {

    if(this.length === 0) {
      return this;
    }

    // support mutltiple elements
    if (this.length > 1){
      this.each(function() {
        $(this).responsiveElement(options);
      });
      return this;
    }

    options = $.extend({}, defaults, options);      // Merge default values with user defined values
    var rules = options.rules.sort(),               // Make sure that the pixel values are sorted properly
        $this = this,
        sizes = [],
        originalClass = $this.attr('class') + ' ',  // We need to remember the original class attribute
        originalWidth = $this.width();              // We want to remember what the original width was

    rules.reverse();

    // We need to split the supplied rules strings into a usable array
    // as well as apply the correct class on instantiation
    classSet = false;
    for (var i = 0; i < rules.length; i++) {
      sizes.push(rules[i].split(','));

      if (classSet === false && originalWidth >= sizes[i][0]) {
        $this.attr('class', originalClass + sizes[i][1]);
        classSet = true;
      }
    }

    $(window).resize(function() {
      // If the width of the element changed, then we want to run the plugin
      if ($this.width != originalWidth) {
        for (var i = 0; i < sizes.length; i++) {
          if ($this.width() >= sizes[i][0]) {
            $this.attr('class', originalClass + sizes[i][1]);

            // Reset the original width to new width
            originalWidth = $this.width();
            break;
          }
        }
      }
    });

    return this;
  };

})(jQuery);
