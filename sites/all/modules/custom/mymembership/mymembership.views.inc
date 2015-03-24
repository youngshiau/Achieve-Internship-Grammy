<?php

/**
 * Implementation of hook_views_plugins().
 */
function mymembership_views_plugins() {
  $plugin = array();
  $plugin['query']['mymembership_plugin_query'] = array(
    'title' => t('My Membership Query'),
    'help' => t('My Membership query object.'),
    'handler' => 'mymembership_plugin_query',
  );
  return $plugin;
}