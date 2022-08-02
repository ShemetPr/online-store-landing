<?php
    if($_POST['product'] == 1) {
        $product = 'Наушники APods 2U';
    } elseif ($_POST['product'] == 2) {
        $product = 'Smart Watch X7 PRO';
    } elseif ($_POST['product'] == 3) {
        $product = 'Робот-пылесос';
    } elseif ($_POST['product'] == 4) {
        $product = 'Колонка JBL Flip 5';
    } elseif ($_POST['product'] == 5) {
        $product = 'Триммер';
    } elseif ($_POST['product'] == 6) {
        $product = 'Триммер для животных';
    } else {
        $product = 'Пользователь не указал наименование товара.';
    } 

    $to = "storecityby@gmail.com, postmaster@storecity.by";
    $from = $_POST["name2"];
    $subject = "ОФОРМЛЕНИЕ ЗАКАЗА НА САЙТЕ storecity.by";
    $phone = $_POST["phone2"];
    $header = "Данные переданы из формы Заказать звонок";
    $message = "Имя:  $from\n".
       "Телефон: $phone\n".
       "Наименование товара: $product";                   
    $headers = "From: $header" . "\r\n" . 
                "X-Mailer: PHP/" . phpversion();
    if(mail($to, $subject, $message)) {
        header('location: html-pages/thanks.html');
        exit;
    } else {
        echo "<script>alert('Данные не отправлены. Повторите попытку.')</script>";
    }
?>


