jQuery(document).ready(function() {
    "use strict";

    $('.slider').ripples({
        dropRadius: 20,
        perturbance: 0.03,
    });

    $('.text').typed( {
        strings: ["We Are <strong class='primary'>SPARKY.</strong>", "We Are <strong class='secondary'>Awesome Developers.</strong>"],
        typeSpeed: 0,
        loop: true
    });
});