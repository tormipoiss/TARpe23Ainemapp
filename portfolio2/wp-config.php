<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'FORCE_SSL_ADMIN', true ); // Redirect All HTTP Page Requests to HTTPS - Security > Settings > Enforce SSL
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

define( 'ITSEC_ENCRYPTION_KEY', 'UiBTb0BSaVFMdHZleUVdYyg8aEJMICghciMlfWwkI3lgPi9bVGxCZDBmQUdKKHgyfHtjcGBsZUc7QlJ7ZSkjQA==' );

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
define( 'DB_NAME', 'd132375sd582085' );

/** Database username */
define( 'DB_USER', 'd132375sa529674' );

/** Database password */
define( 'DB_PASSWORD', 'CsSK6e74LWDbf8259' );

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
define('AUTH_KEY',         'pmPQYzHWNobh3UFtmbg3hmi2e3WNQiORZ8MIjz6pkQOp8kJBCqZfbFFAcRWeYGr9');
define('SECURE_AUTH_KEY',  'E8ROVZGbMA9WFyXpNkR6NwRSN3PwukNWUeX9b9YhBYCqauHrZhcyM5kDoecoshvj');
define('LOGGED_IN_KEY',    'KIqGKWIxPuF2rJmIAzuyQBVi2L96cPAb1d2EFSVslvYwWZcqtm6pUjxZPwx1tCUF');
define('NONCE_KEY',        'ae30ciM93Fr8vLiawshV4gObDTudva63J9kdbcAEZZ595Gjh8iE4lH8npLF7ZbZe');
define('AUTH_SALT',        'Vi8AxgAMQJPFTwqUOk6CJf6OSv3dVvGEAM0u5baE4sckolH0L6plIZEyrYH6Rsln');
define('SECURE_AUTH_SALT', 'Qgwnk56R3MyzirSYB5dzSU5NWk0TBOlX0Cn4mSQBq0q8JoE8NxJ1eopD1wgVQoqF');
define('LOGGED_IN_SALT',   'zimVkPqAHIWbPZwPRaDYdW8rLZMIiodBd2WbJZJ1BS0XsAQN11HbRp4fYrbL9qlH');
define('NONCE_SALT',       'isRRmrusAUQcZQp4HxYsp3qssQWpyNo821ipDvreT4BcV9dWLvJJMHyI1sQaIVaM');

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
$table_prefix = 'lqtd_';

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



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
