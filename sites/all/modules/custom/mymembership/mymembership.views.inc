<?php

/**
 * Implementation of hook_views_plugins().
 */
function mymembership_views_plugins() {
  $plugin = array();
  $plugin['exposed_form']['mymembership_plugin_exposed_form'] = array(
    'title' => t('My Membership Exposed Form'),
    'help' => t('My Membership exposed form object.'),
    'handler' => 'mymembership_plugin_exposed_form',
  );
  return $plugin;
}

/**
 * Implementation of hook_views_data().
 */
function mymembership_views_data() {
  $data = array();
  
  // Defines the prefix in the UI for this table's fields, sort criteria, etc.
  // so that it's easier to tell where those fields come from.
  $data['mymembership_requests']['table']['group'] = t('MyMembership Groups');
  
  // Defines this table as a base table - a table that can be described in
  // itself by views, and not just being brought in as a relationship.
  $data['mymembership_requests']['table']['base'] = array(
    'field' => 'rid',
    'title' => t('MyMembership Groups'),
    'help' => t('MyMembership table for requests for committee membership'),
    'exposed form class' => 'mymembership_plugin_exposed_form',
  );
  
  // This table references the {node} table. The declaration below creates an
  // implicit relationship to the node table, so that when 'node' is the base
  // table, the fields automatically become available.
  $data['mymembership_requests']['table']['join'] = array(
    'node' => array (
      'left_field' => 'nid', // primary key in referenced table
      'field' => 'uid', // foreign key in this table
    ),
  );
  
  // Request ID table field.
  $data['mymembership_requests']['rid'] = array(
    'title' => t('MyMembership Request'),
    'help' => t('MyMembership unique request ID'),
  );
  
  // User (node, not actual user) ID table field.
  $data['mymembership_requests']['uid'] = array(
    'title' => t('MyMembership Request - user ID'),
    'help' => t('MyMembership user ID'),
    'relationship' => array(
      'base' => 'node', // The name of the table to join with.
      'base field' => 'nid',
      'handler' => 'views_handler_relationship',
      'label' => t('Label for relationship between MyMembership uid and node'),
      'title' => t('Title to show when adding relationship between MyMembership uid and node'),
      'help' => t('Add information here for relationship between MyMembership uid and node'),
    ),
  );
  
  // Committee ID table field.
  $data['mymembership_requests']['cid'] = array(
    'title' => t('MyMembership Request - committee ID'),
    'help' => t('MyMembership committee ID'),
    'relationship' => array(
      'base' => 'node',
      'base field' => 'nid',
      'handler' => 'views_handler_relationship',
      'label' => t('Label for relationship between MyMembership cid and node'),
      'title' => t('Title to show when adding relationship between MyMembership cid and node'),
      'help' => t('Add information here for relationship between MyMembership cid and node'),
    ),
  );
  
  // MyMembership timestamp field.
  $data['mymembership_requests']['timestamp_field'] = array(
    'title' => t('Timestamp field'),
    'help' => t('Timestamp of when user submitted membership request'),
    'field' => array(
      'handler' => 'views_handler_field_date',
      'click sortable' => TRUE,
    ),
    'sort' => array(
      'handler' => 'views_handler_sort_date',
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_date',
    ),
  );
  
  return $data;
}