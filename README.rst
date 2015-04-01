****************
Baseline overlay
****************

A small utility to visualise a baseline grid over a webpage. Requires jQuery.
(Sorry.)

.. image:: http://i.imgur.com/jOvTzse.png


Usage
=====

Simply include it in your page source and invoke it like this:

.. code:: javascript

    $(document).ready(function () {
      $("body").baselineOverlay();
    });

By default the script assumes font size of 10px and line height equal to 1.5,
but both values are configurable.

Options
-------


gridSize
    (default value: *19*)

    Set it to the pixel of a single line. This is usually the pixel size of the
    font chosen to represent regular text multiplied by the unitless
    *line-height* attribute. *(i.e. if you choose font-size of 18px and
    line-height of 1.5, the gridSize parameter would be 27.)*


lineColor
    (default value: *"#db186f"*)

    The color with which the lines in grid are painted with.


textColor
    (default value: *"#fff"*)

    The color of the button's label.


zIndex
    (default value: *99999*)

    Z-index of the overlay.


See also
========

You may also be interested in checking out `Baseliner`_ bookmarklet by
`@jkeyes`_.

.. _@jkeyes: https://twitter.com/jkeyes
.. _Baseliner: http://keyes.ie/things/baseliner/
