<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
?>
<?php
$path_parts = pathinfo($_GET['aid']);
$file_name  = $path_parts['basename'];
$file_path  = '../articles/' . $file_name;
readfile($file_path);
?>
