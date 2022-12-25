function updatePrice() {
    let s = document.getElementsByName("type");
    let select = s[0];
    let price = 0;
    let prices = {
        types: [20000, 50000, 60000],
        options: {
            1: 15000,
            2: 20000,
        },
        checkboxes: {
            1: 1000,
            2: 5000,
            3: 8000,
        }
    };
    price = prices.types[select.value - 1];
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "2" ? "block" : "none");
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
        if (radio.checked) {
            let optionPrice = prices.options[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "1" || select.value == "2" ? "none" : "block");
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            let cPrice = prices.checkboxes[checkbox.name];
            price += cPrice;
        }
    });
    let count = document.getElementById("count").value;

    if(parseInt(count) < 0) {
        let Price = document.getElementById("price");
        Price.innerHTML = "Введенное количество меньше нуля";
    }
    else {
        price *= parseInt(count);
        if(select.value != "2") {
            if(price-prices.types[select.value - 1] * count>=100 && select.value != "1" && price-prices.types[select.value - 1] * count!=130 && price-prices.types[select.value - 1] * count!=140) {
                price -= 100 * count;
            }
            if(select.value == "1") {
                price = prices.types[0] * count;
            }
        }
        /*else if(price/count-prices.types[select.value - 1] == 10 || price/count-prices.types[select.value - 1] == 110) {
        price -= 10 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 50 || price/count-prices.types[select.value - 1] == 150) {
            price -= 50 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 80 || price/count-prices.types[select.value - 1] == 180) {
            price -= 80 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 60 || price/count-prices.types[select.value - 1] == 160) {
            price -= 60 * count;
        }        */
        let Price = document.getElementById("price");
        Price.innerHTML = "Покупатель, Ваш заказ стоит " + price + " рублей ";
    }
}
window.addEventListener('DOMContentLoaded', function (event) {
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    let s = document.getElementsByName("type");
    let select = s[0];
    select.addEventListener("change", function(event) {
        updatePrice();
    });
    let count = document.getElementById("count");
    count.addEventListener("change", function(event) {
        updatePrice();
    });
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
        radio.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    updatePrice();
});