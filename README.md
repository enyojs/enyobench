# EnyoBench

This is a benchmarking suite to test Enyo performance on browsers and devices.

Each test has its own specific driver HTML file with its own reporting
mechanism. In the final version, we will be able to run all of the tests in
series and have a single report shown at the end of the tests.

There are four primary tests:

## Application Loading

This measures the time needed to load the enyo.js and app.js files, as well as
time needed to create the initial application instances.

## Component Generation

This measures a lot of DOM operations by generating 100 items, all created
with a pseudorandom set of elements using the fittable layouts. So, this not
only sees internal string generation time, but also time spent putting those
nodes into the DOM and then measuring and modifying them.

## List Scrolling

This creates a scroller with an embedded enyo.List holding 5,000 items. It
then scrolls from the top to the bottom.  The main measurement here is frames-
per-second, measured using a secondary requestAnimationFrame handler.

## Panel Animation

This generates a series of 20 panels with pseudorandom content, keeping three
alive at any time.  It uses CardArranger to transition between each pair of
panels and monitors panel creation time and FPS during the panel transitions.
