<?php 
$link = mysql_connect('sql.mkombinat.nazwa.pl','mkombinat_1','MarysienkI138'); 
if (!$link) { 
	die('Could not connect to MySQL: ' . mysql_error()); 
} 
echo 'Connection OK'; mysql_close($link); 
?> 