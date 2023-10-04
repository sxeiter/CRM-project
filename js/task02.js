'use strict'

const modificate = (str) => {
    let changeStr = str.toLowerCase();
    changeStr = changeStr[0].toUpperCase() + changeStr.slice(1);
    return changeStr;
  };
  
  console.log(modificate("перваЯ буква заглавная, ОСТАЛЬНЫЕ НЕТ"));