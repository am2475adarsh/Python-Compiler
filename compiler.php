<?php

$code = $_POST['code'];
$arguement = $_POST['argl'];
shell_exec('touch main.py');
$programFile = fopen('main.py', "w");
fwrite($programFile, $code);
fclose($programFile);
// // running python 
$ret_val = shell_exec("python main.py $arguement 2>&1");
echo $ret_val;
