/*globals document, window, jQuery */

(function ($) {

  "use strict";

  var blockSize;
  var canvas;
  var settings;
  var url;

  // http://stackoverflow.com/questions/610406/
  if (!String.prototype.format) {
    String.prototype.format = function () {
      var args = arguments;
      return this.replace(/\{(\d+)\}/g, function (match, number) {
        return args[number] !== undefined ? args[number] : match;
      });
    };
  }

  var initCanvas = function () {
    var attrs = 'width="{0}" height="{0}"'.format(blockSize);
    var element = $('<canvas {0}></canvas>'.format(attrs))
      .css({position: "absolute", top: "0", left: "-9999px"});
    canvas = element[0];
    $("body").append(canvas);
  };

  var initTarget = function (target) {
    var button;
    var css;
    var overlay;

    var generateOverlayStyles = function () {
      var offset = $(target).offset();
      return {
        "width": $(target).width() + "px",
        "height": $(target).height() + "px",
        "left": offset.left + "px",
        "top": offset.top + "px"
      };
    };

    css = $.extend(
      {
        "background-image": "url({0})".format(url),
        "pointer-events": "none",
        "position": "absolute",
        "z-index": settings.zIndex
      },
      generateOverlayStyles()
    );

    overlay = $("<div></div>")
      .width($(document).width())
      .height($(document).height())
      .css(css)
      .hide();
    $(target).append(overlay);

    button = $('<button type="button">toggle rhytm grid</button>')
      .css({
        "font-family": "sans-serif",
        "position": "fixed",
        "bottom": "10px",
        "left": "10px",
        "z-index": settings.zIndex + 1
      })
      .click(function () {
        $(overlay).toggle();
      });
    $(target).append(button);
  };

  var setURL = function () {
    var context = canvas.getContext("2d");
    context.strokeStyle = settings.lineColor;
    context.moveTo(0, blockSize);
    context.lineTo(blockSize, blockSize);
    context.stroke();
    url = canvas.toDataURL("image/png");
  };

  $.fn.baselineOverlay = function (options) {
    settings = $.extend({
      baseSize: 10,
      gridHeight: 1.5,
      lineColor: "#db186f",
      zIndex: 99999
    }, options);

    blockSize = settings.baseSize * settings.gridHeight;
    initCanvas();
    setURL();
    initTarget(this);

    return this;
  };

}(jQuery));
