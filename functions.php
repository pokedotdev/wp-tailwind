<?php

/**
 * Enqueues scripts and styles.
 */
function wp_tailwind_scripts() {
	wp_enqueue_style('default-style', get_stylesheet_uri(), array(), '20201208');
	wp_enqueue_style('tailwind-style', get_theme_file_uri('dist/tailwind.css'), array(), '20201208');
	wp_enqueue_style('theme-style', get_theme_file_uri('dist/app.css'), array(), '20201208');
	wp_enqueue_script('theme-app', get_theme_file_uri('dist/app.js'), array(), '20190121', true);
}
add_action('wp_enqueue_scripts', 'wp_tailwind_scripts');

/**
 * Theme setup.
 */
function wp_tailwind_setup() {
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'wp_tailwind_setup');
