$(document).ready(function(){
    $("#call-form-data").submit(function(e) { //устанавливаем событие отправки для формы с id=form
            e.preventDefault()
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: 'POST', //Метод отправки
            url: 'send.php', //путь до php фаила отправителя
            data: form_data,
                    success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                    alert('Ваши данные отправлены! Ожидайте звонок менеджера.'); // пoкaжeм eё тeкст
                    }
            });
    });
});    