$(document).ready(function () { //когда структура будет загружена выполняем код ниже
    $(".header").height($(window).height()); //присваиваем высоте хэдера высоту окна

    try { //попробуем взять комментарии
        let Comments = JSON.parse(localStorage.getItem("comments"));
        for (i = 0; i < Comments.length; i++) {
            $("#comments").append("<p> - " + Comments[i] + "</p>"); //выводим комментарии внизу
        }
    }
    catch (any) {//если их нет в localStorage, то создаем
        Comments = [];
        localStorage.setItem("comments", JSON.stringify(Comments));
    }

    $(".navbar a").click(function () { //при нажатии на ссылку навбара
        $("body, html").animate({ //анимация скролла
            scrollTop: $("#" + $(this).data('value')).offset().top - 50 //скроллим до нужного места
        }, 1500);

    });

    $("#comment").click(function () { //при нажатии на Отправить отзыв
        var comment = $("#myComment").val();    //получаем введенный комментарий
        var Comments = JSON.parse(localStorage.getItem("comments")); //получаем все комментарии из localStorage
        Comments.push(comment); //запихиваем в массив новый комментарий
        localStorage.setItem("comments", JSON.stringify(Comments)); //отправляем в localStorage обновленные комменты
        $("#comments").append("<p> - " + comment + "</p>"); //вставляем комментарий внизу
        $("#myComment").val(""); //очищаем ввод комментария
    });

});

function Claim(){
    alert("Ваша заявка отправлена (на самом деле ничего не отправлено). Ожидайте ответного письма от Темика.\n\nС уважением, DatingWithTemik.");
}