****************
Baseline overlay
****************

A small utility to visualise a baseline grid over a webpage. Requires jQuery.
(Sorry.)

.. image:: http://i.imgur.com/LS0xjQN.png
    :scale: 75%


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


baseSize
    (default value: *"10px"*)

    Set it to the font size of the regular text in your page.


gridHeight
    (default value: *1.5*)

    The multiplier by which the height of the line is calculated. Generally it
    should be equal to the value of *line-height* set for your regular text.


lineColor
    (default value: *"#db186f"*)

    The color with which the lines in grid are painted with.


zIndex
    (default value: *99999*)

    Z-index of the overlay.


See also
========

You may also be interested in checking out `Baseliner`_ bookmarklet by
`@jkeyes`_.

.. _@jkeyes: https://twitter.com/jkeyes
.. _Baseliner: http://keyes.ie/things/baseliner/
