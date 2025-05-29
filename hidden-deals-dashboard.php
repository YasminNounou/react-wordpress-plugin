<?php
/**
 * Plugin Name: Hidden Deals Dashboard
 */

add_action('admin_menu', function () {
    add_menu_page(
        'Hidden Deals',
        'Hidden Deals',
        'manage_options',
        'hidden-deals',  // Ensure this matches the hook
        'render_hidden_deals_page',
        '',
        6
    );
});

function render_hidden_deals_page() {
    echo '<div id="hidden-deals-root">Loading...</div>';
}

add_action('admin_enqueue_scripts', function ($hook) {
    error_log('Current hook: ' . $hook);

    // Ensure the hook is for your plugin page
    if ($hook !== 'toplevel_page_hidden-deals') return;
    // if ($hook !== 'hidden-deals') return;
    // Asset directory and URL paths
    $asset_dir = plugin_dir_path(__FILE__) . 'dist/build/static/';
    $asset_url = plugin_dir_url(__FILE__) . 'dist/build/static/';

    // Enqueue JS files
    foreach (glob($asset_dir . 'js/main-*.js') as $file) {
        wp_enqueue_script(
            'hidden-deals-js',
            $asset_url . basename($file),
            [],
            filemtime($file),
            true
        );
    }

    // Enqueue CSS files
    foreach (glob($asset_dir . 'css/main-*.css') as $file) {
        wp_enqueue_style(
            'hidden-deals-css',
            $asset_url . basename($file),
            [],
            filemtime($file)
        );
    }
});

    
    