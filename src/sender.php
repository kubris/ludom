<?php

$c = true;

$name    =  trim(htmlentities($_POST['userName']));
$tel =  trim(htmlentities($_POST['userPhone']));
$text 	 =  trim(htmlentities($_POST['userMessage']));
$subject =  trim(htmlentities($_POST['subject']));

$to      = "kubris.pro@gmail.com";  // email to receive messages
$date    = date("d.m.Y");
$time    = date("h:i");
//$from    = $email;
$toSelf  = $to;


function adopt($txt) {
	return '=?UTF-8?B?'.base64_encode($txt).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($subject).'<'.$toSelf .'>' . PHP_EOL;
//'Reply-To: '.$email.'' . PHP_EOL;


// Serialize form fields - that filled-in by User
foreach ($_POST as $key =>
$value ) {
	$msg .= "" 
		. ( ($c = !$c) ? '	<tr>':'<tr style="background-color: #f8f8f8;">' ) 
		. 	"<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>";
}

$msg = "<table style='width: 100%;'>"
	. " $msg"
	."</table>";

mail($to, $subject, $msg, $headers);

?>