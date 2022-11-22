$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("Заказ подтвержден, оправдание одобрено");
                }
                else{
                    alert("Ошибка: " + response.message);
                }
            }
        });
    });
});
window.addEventListener('DOMContentLoaded', function (event){
    let buttons = $(".btn")
    let flag = document.getElementById('exampleCheck1')
    if(flag.checked){
        buttons.filter(".disabled").removeClass("disabled").attr('disabled', false)
    }
    document.getElementById('formButton').addEventListener('click', e => {
        history.pushState({page: 1}, "title 1", "?openForm");
    });
    document.getElementById('closeButton').addEventListener('click', e => {
        history.back();
    });
});