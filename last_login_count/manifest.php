<?php
/*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */

$manifest = array (
  'acceptable_sugar_versions' =>  
  array (
    '7.*.*',
    '8.*.*',
    '9.*.*',
    '10.*.*',
  ),
  'acceptable_sugar_flavors' => 
  array (
    'PRO',
    'CORP',
    'ENT',
    'ULT',
  ),
  'readme' => 'readme.txt',
  'key' => '',
  'author' => 'kuske',
  'description' => '',
  'icon' => '',
  'is_uninstallable' => true,
  'name' => 'last_login_count',
  'published_date' => '2020-04-10 00:00:02',
  'type' => 'module',
  'version' => 202004100002,
  'remove_tables' => 'false',
);

$installdefs = array (
  'id' => 'last_login_count',
  'language' => 
  array (
    0=> 
    array (
      'from' => '<basepath>/SugarModules/include/language/en_us.last_login_count.php',
      'to_module' => 'application',
      'language' => 'en_us',
    ),
  ),

  'copy' => 
  array (
    0 => 
    array (
      'from' => '<basepath>/SugarModules/custom/',
      'to' => 'custom/',
    ),
  ),
);