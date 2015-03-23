<?php
drupal_add_js(drupal_get_path('module', 'myeventattendance') . '/myeventattendance.js');  
?>
<div id="myeventattendance-status"><?php print $status; ?></div>
<div id="myeventattendance-buttons"><?php print $willAttend . $willNotAttend; ?></div>