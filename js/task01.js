'use strict'

const dollar = 73;
const euro = 1.2 * dollar;

const getConvert = (sum) => {
    return sum * euro;
}

console.log(getConvert(10))
