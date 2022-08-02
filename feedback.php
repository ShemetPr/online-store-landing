<?php
    $to = "storecityby@gmail.com, postmaster@storecity.by";
    $from = $_POST["name"];
    $subject = "ФОРМА ОБРАТНОЙ СВЯЗИ С САЙТА storecity.by";
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $text = $_POST["message"];
    $header = "Данные переданы из формы Заказать звонок";
    $message = "Имя:  $from\n".
       "Телефон: $phone\n".
       "Email: $email\n".
       "Текст сообщения: $text";                   
    $headers = "From: $header" . "\r\n" . 
                "X-Mailer: PHP/" . phpversion();
    if(mail($to, $subject, $message)) {
        header('location: html-pages/thanks.html');
        exit;
    } else {
        echo "<script>alert('Данные не отправлены. Повторите попытку.')</script>";
    }
?>


