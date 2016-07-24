<?php
    $my_file = 'subscribers.csv';
    $handle = fopen($my_file, 'a') or die('Cannot open file:  '.$my_file);
    $data = "\n" . $_REQUEST['name'] . ", " . $_REQUEST['email'];
    fwrite($handle, $data);