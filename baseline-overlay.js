/*globals document, window, jQuery */

(function ($) {

  "use strict";

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
    var attrs = 'width="{0}" height="{0}"'.format(settings.gridSize);
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
        "font-weight": "bold",
        "background-color": settings.lineColor,
        "color": settings.textColor,
        "border": "none",
        "padding": "0.5em",
        "position": "fixed",
        "bottom": "10px",
        "left": "10px",
        "z-index": settings.zIndex
      })
      .click(function () {
        $(overlay).toggle();
      });
    $(target).append(button);
  };

  var setURL = function () {
    var context = canvas.getContext("2d");
    context.strokeStyle = settings.lineColor;
    context.moveTo(0, settings.gridSize);
    context.lineTo(settings.gridSize, settings.gridSize);
    context.stroke();
    url = canvas.toDataURL("image/png");
  };

  $.fn.baselineOverlay = function (options) {
    settings = $.extend({
      gridSize: 19, // assuming default font-size: 16px and line-height: 1.2
      lineColor: "#db186f",
      textColor: "#fff",
      zIndex: 99999
    }, options);

    initCanvas();
    setURL();
    initTarget(this);

    return this;
  };

}(jQuery));
