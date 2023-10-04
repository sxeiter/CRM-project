'use strict'
const productName = prompt("Введите наименование товара");
const amount = parseInt(prompt("Количество товара"));
    if (Number(amount)) {
        console.log(amount)
    } else {
        prompt("Вы ввели некорректные данные")
    }
const category = prompt("Категория товара");
const price = parseInt(prompt("Цена товара"));
    if (Number(price)) {
        console.log(price)
    } else {
        prompt("Вы ввели некорректные данные")
    }

console.log(productName);
console.log(amount * price);
console.log(category);
console.log(price);

console.log ("Тип данных в количестве и стоимости" , typeof amount, typeof price);
console.log(`На складе ${Number(amount)} товара ${productName} из категории ${category} 
на сумму ${Number (price * amount) } деревянных`);

