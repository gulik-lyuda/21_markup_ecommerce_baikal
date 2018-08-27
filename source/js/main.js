$(function(){
    "use strict";

// Work with Sign In button
    $('#sign_in_btn').click(function() {
        $('#sign_in').toggleClass('open');
        $('.disable_page').toggleClass('open');
    });

    $('#close_btn, .disable_page').click(function() {
        $('#sign_in').toggleClass('open');
        $('.disable_page').toggleClass('open');
    });

// Work with the Cart button
    $('#cart_btn, .cart__title').click(function() {
        $('#cart').toggleClass('open');
    });

// Open the submenu by clicking on the left panel menu item
    $('.item__title').click(function() {

        $(this).toggleClass('open');
        $(this).next('.item__links').toggleClass('open');

    });

// Work with the price slider on the left panel 
    // initialize our slider and inputs with start values
    $('#slider').slider({
        min: 0,
        max: 1000,
        range: true,
        values: [190, 728],
        slide: function( event, ui ) {
            $('input[name="minPrice"]').val( '$' + ui.values[0] );
            $('input[name="maxPrice"]').val( '$' + ui.values[1] );
        }
    });

    // change input values by changing slider handles
    $('input[name="minPrice"]').val( '$' + $('#slider').slider('values', 0) );
    $('input[name="maxPrice"]').val( '$' + $('#slider').slider('values', 1) );

    // change slider handle positions by changing input values
    $('input[name="minPrice"]').on("change paste keyup", function() {
        $('#slider').slider('values', 0, $(this).val().replace('$', '')); 
    });
    $('input[name="maxPrice"]').on("change paste keyup", function() {
        $('#slider').slider('values', 1, $(this).val().replace('$', '')); 
    });

});