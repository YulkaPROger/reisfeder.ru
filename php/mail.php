<?php

    $token = "1877424600:AAHdE5Lq_UZeEzFu3S5YmlF8jII7SZEwHt4";

    $chat_id = "-1001321258060";


    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $txt = 'Имя: '.$name.', Телефон: '.$phone;

    $url = 'https://api.telegram.org/bot'.$token.'/sendMessage?chat_id='.$chat_id.'&text='.$txt;

    

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    curl_close($ch);

?>