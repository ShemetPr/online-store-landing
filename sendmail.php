<?php
    $to = "storecityby@gmail.com, postmaster@storecity.by";
    $from = $_POST["name"];
    $subject = "ЗАКАЗ ЗВОНКА С САЙТА storecity.by";
    $phone = $_POST["phone"];
    $header = "Данные переданы из формы Заказать звонок";
    $message = "Имя:  $from\n".
       "Телефон: $phone"; 
    if(mail($to, $subject, $message)) {
        header('location: html-pages/thanks.html');
        exit;
    } else {
        echo "<script>alert('Данные не отправлены. Повторите попытку.')</script>";
    }
?>