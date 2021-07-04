$("#sendMail").on("click", function(){
    console.log("Проверка связи")
    var name = $("#name").val().trim()
    var phone = $("#phone").val().trim()
    console.log("Проверка связи " + name + phone)

    var token = "1877424600:AAHdE5Lq_UZeEzFu3S5YmlF8jII7SZEwHt4";

    var chat_id = "-1001321258060";

    var txt = 'Имя: ' + name + ', Телефон: ' + phone;

    var url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&text=' + txt;

    console.log("Проверка связи " + url)
    $.ajax({
        url: url,
        type: 'GET',
        cache: false,
        dataType: 'html',
        beforeSend: function(){
            $("#sendMail").prop("disabled", true)
        },
        success: function(data){
            // alert(data)
            $("#sendMail").prop("disabled", false)
        }

    })

})