<?php

class mymembership_exposed_form_plugin extends views_plugin_exposed_form_basic {
  function summary_title() {
    return t('MyMembership Plugin');
  }
  
  function exposed_form_alter(&$form, &$form_state) {
    parent::exposed_form_alter(, );
    
    // ... do something? ...
  }
  
  // override methods defined in parent class. make sure to
  // call parent::overridden_method() so we dont lose default
  // functionality
}