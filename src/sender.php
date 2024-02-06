<?php

$name    =  trim(htmlentities($_POST['userName']));
$tel 	 =  trim(htmlentities($_POST['userPhone']));
$text 	 =  trim(htmlentities($_POST['userMessage']));
$subject =  trim(htmlentities($_POST['subject']));
$subject =  'Письмо со страницы: ' . $subject;

$to      = "kubris.pro@gmail.com";
$date    = date("d.m.Y");
$time    = date("h:i");
$toSelf  = $to;


function adopt($txt) {
	return '=?UTF-8?B?'.base64_encode($txt).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: ' .adopt($subject) . PHP_EOL;

foreach ($_POST as $key =>
$value ) {
	$msg .= "$key : $value" . PHP_EOL;
}

mail($to, $subject, $msg, $headers);

?>