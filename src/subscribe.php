<?php
$to      = 'wotkad@gmail.com';
$subject = 'Заявка с сайта';
$message = 'Заявка. Почта: ' . $_POST["email"];
$headers = 'From: wotkad@gmail.com' . "\r\n" .
    'Content-Type: text/plain; charset=utf8;' . "\r\n" .
    'Reply-To: wotkad@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>

