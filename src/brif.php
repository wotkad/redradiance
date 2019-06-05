<?php
$to      = 'wotkad@gmail.com';
$subject = 'Заявка с сайта';
$message = '

Тип проекта: ' . $_POST["type"] . '<br>
Услуга: ' . $_POST["service"] . '<br>
Бюджет: ' . $_POST["budget"] . '<br>
Задача: ' . $_POST["brif16"] . '<br>
Файл: ' . $_POST["upload"] . '<br>
Имя: ' . $_POST["name"] . '<br>
Телефон: ' . $_POST["phone"] . '<br>
Откуда вы узнали про нас: ' . $_POST["info"];

$headers = 'From: wotkad@gmail.com' . "\r\n" .
    'Content-Type: text/plain; charset=utf8;' . "\r\n" .
    'Reply-To: wotkad@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>
