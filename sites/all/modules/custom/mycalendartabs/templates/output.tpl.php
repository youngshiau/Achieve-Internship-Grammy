<?php
drupal_add_js(drupal_get_path('module', 'mycalendartabs') . '/mycalendartabs.js');  
?>

<div id="mycalendartabs-tabs"><?php print $month . $year . $upcoming; ?></div>