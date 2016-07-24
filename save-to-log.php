<?php
  $log_file_name = 'subscribers/mylog.log'; // Change to the log file name
  $message = $_POST['formData']; // incoming message
  file_put_contents($log_file_name, $message, FILE_APPEND);
  header('Location: /'); // redirect back to the main site