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

// Work with Search button
    $('#search_btn').click(function() {
        $('#search_panel').toggleClass('open');
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

// Work with Load More button under the Products list
    $('#load_more_btn').click(function(event) {
        event.preventDefault();

        // in real life we'll get them from a server :-)
        $('.products__list').append('<!-- Product 1 --><a class="products__item rounded_box main_flex__nowrap flex__jcontent_centerflex__align-items_center"><div class="products__item_sticker rounded_box main_flex__nowrap flex__jcontent_center flex__align-items_center">new</div><div class="products__item_image"><img src="images/content/product_001.png" alt="Product Image"></div><h2>Our Legacy Splash<br>Jacquard Knit</h2><p class="products__item_tags">Faded Olive Twill</p><!-- end of .products__item_tags --><p class="products__item_price">$570</p><!-- end of .products__item_price --></a><!-- end of .products__item --><!-- Product 2 --><a class="products__item rounded_box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="products__item_image"><img src="images/content/product_002.png" alt="Product Image"></div><h2>Our Legacy Splash<br>50s Sweater</h2><p class="products__item_tags">Grey Melange</p><!-- end of .products__item_tags --><p class="products__item_price">$160</p><!-- end of .products__item_price --></a><!-- end of .products__item -->');
    });

    

});