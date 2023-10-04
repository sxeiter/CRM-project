// вторая задача

const rain = Math.round(Math.random());
    if (rain === 1)
        console.log('Пошёл дождь. Возьмите зонт!')
    else {
        console.log('Дождя нет!')
    }
// третья задача

const algebra = parseInt(prompt('Введите кол-во баллов по математике'));
const russian = parseInt(prompt('Введите кол-во баллов по русскому языку'));
const informatic = parseInt(prompt('Введите кол-во баллов по информатике'));

const univer = algebra + russian + informatic;
    if (univer >= 265) {
        console.log('Поздравляю, вы поступили на бюджет!')
    }
    else {
        console.log('Сорян')
    }

    // четвертая задача

    const money = prompt("Сколько денег вы хотите снять?")
        if (money % 100 === 0) {
            console.log(`Спасибо за снятие в размере ${money}`);
        }
        else {
            console.log("Вы не можете снять деньги , введите сумму кратную 100");
          }