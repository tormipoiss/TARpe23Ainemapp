<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'd132375sd583357' );

/** Database username */
define( 'DB_USER', 'd132375sa530912' );

/** Database password */
define( 'DB_PASSWORD', 'c2b56X9h5f69MGHUP' );

/** Database hostname */
define( 'DB_HOST', 'd132375.mysql.zonevs.eu' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'dpWPe19tZvnzvCa9YpOscIIP9PLE1ldcFJmpbVFgiTVLi9SmINZYDqo8AxlyycbZ');
define('SECURE_AUTH_KEY',  'k1wLVKcJJojLxDKI8n3Aa4WibuzIGRJ2birvgQo6TL0DN9ruPkNBDGv8VqNAw47i');
define('LOGGED_IN_KEY',    'QpvosVIwwE4NyCED1N0hdgnmtyJsarVZJ16NGdJzQdTjCKYlxoN46poNAwkKmbzw');
define('NONCE_KEY',        'XIod6dcBTThwSKfBz6yc3oMCZXqCBwwZqncD5rMLzgEVINcc3u0bRJQyH2ji3hW0');
define('AUTH_SALT',        'BSIpVg8cG6VXWulVUoPujJmH15Mem7Q8OAmvYmr5V7G67IUWWHV3WWfr3uAIzVKv');
define('SECURE_AUTH_SALT', 'tan5Ar7xz2EwAjTGSzhVjtUp7sYMklRwkvuiEAeTKoh4Z5VXXXzGp48Q8l6Hav7x');
define('LOGGED_IN_SALT',   'F80PMBCry9rDoMkiZnE9G72MO8Uq8zafpXuEq1ULzc2czzBh9akt6E4Kjy40aKvK');
define('NONCE_SALT',       'pwMmiUuVGOvAsnWxbqDhOsL1aWKfofBDODY1Fw4eDQEF1QqzK95FHCiQ4mcr5eJE');

/**
 * Other customizations.
 */
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'gf6x_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

/* Multisite */
define( 'WP_ALLOW_MULTISITE', true );

define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', false );
define( 'DOMAIN_CURRENT_SITE', 'tormilaane23.thkit.ee' );
define( 'PATH_CURRENT_SITE', '/Lokomotiiv/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
