<?php
/**
 * The default template.
 *
 */

$context = Timber::context();

$templates = ['index.twig'];

if (is_home()) {
	array_unshift($templates, 'home.twig');
}

Timber::render($templates, $context);