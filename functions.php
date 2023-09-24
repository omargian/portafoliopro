<?php

function theme_scripts() {
	/** ---- STYLES ---- */
	wp_enqueue_style( 'bootstrap_css', get_template_directory_uri() . '/css/bootstrap.min.css', array(), '5.1.1' );
  	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/font-awesome-4.7.0/css/font-awesome.min.css' );
	wp_enqueue_style( 'iconos', get_template_directory_uri() . '/icons/icon-font.min.css' );
	wp_enqueue_style( 'custom', get_template_directory_uri() . '/custom.css' );

	/** ---- SCRIPTS ---- */
	wp_deregister_script('jquery');
	wp_enqueue_script( 'jquery-min', get_template_directory_uri() . '/js/jquery-3.6.4.min.js', array(), '3.6.4', true );
	wp_enqueue_script( 'bootstrap_js', get_template_directory_uri() . '/js/bootstrap.bundle.min.js', array( 'jquery-min' ), '5.1.1', true );

  	wp_enqueue_script( 'typed', get_template_directory_uri() . '/js/typed.min.js', array('jquery-min'), true );
  	wp_enqueue_script( 'main_js', get_template_directory_uri() . '/main.js', array('bootstrap_js'), true );
	wp_enqueue_script('jquery-migrate', 'https://code.jquery.com/jquery-migrate-3.3.2.min.js', array('jquery-min'), '3.3.2', true);
	wp_enqueue_script( 'waypoints', 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js', array( 'jquery-min' ), true );
	wp_enqueue_script( 'counterUp', get_template_directory_uri() . '/js/counterUp.js', array('jquery-min', 'waypoints'), true );
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );

function my_theme_setup() {
    // Enable support for custom logo.
	add_theme_support(
		'custom-logo',
		array(
			'height' => 100,
			'width'  => 100
		)
	);
	// Support Featured Images
	add_theme_support( 'post-thumbnails' );
	//widget
	add_theme_support( 'widgets' );
  	add_image_size( 'sidebar-custom-image' );
}
add_action( 'after_setup_theme', 'my_theme_setup' );

