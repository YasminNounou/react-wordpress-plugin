<?php
/**
 * Plugin Name: Hidden Deals Dashboard
 */

add_action('admin_menu', function () {
    add_menu_page(
        'Hidden Deals',             // Page Title
        'Hidden Deals',             // Menu Title
        'manage_options',           // Capability
        'hidden-deals',             // Slug for the menu
        'render_hidden_deals_page', // Callback to render the page
        '',                         // Icon (optional)
        6                           // Position (optional)
    );
});

/
function load_hidden_deals_assets() {
    $plugin_url = plugin_dir_url(__FILE__);

    // Enqueue built JS and CSS
    wp_enqueue_script('hidden-deals-js', $plugin_url . 'dist/static/js/main.5c993974.js', [], null, true);
    wp_enqueue_style('hidden-deals-css', $plugin_url . 'dist/static/css/main.f855e6bc.css');
}
add_action('wp_enqueue_scripts', 'load_hidden_deals_assets');

// Add div for React to mount
function hidden_deals_root_div() {
    echo '<div id="hidden-deals-root"></div>';
}
add_shortcode('hidden_deals', 'hidden_deals_root_div');
