/*
 * jquery fifa
 * 
 *
 * Copyright (c) 2014 Matt Williams
 * Licensed under the MIT license.
 */

(function ($) {

  // Collection method.
  $.fn.jqueryFifa = function () {
    return this.each(function (i) {
      // Do something to each selected element.
      $(this).html('jqueryFifa' + i);
    });
  };

  // Static method.
  $.jqueryFifa = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.jqueryFifa.options, options);
    // Return the name of your plugin plus a punctuation character.
    return 'jqueryFifa' + options.punctuation;
  };

  // Static method default options.
  $.jqueryFifa.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].jqueryFifa = function (elem) {
    // Does this element contain the name of your plugin?
    return $(elem).text().indexOf('jqueryFifa') !== -1;
  };

}(jQuery));
