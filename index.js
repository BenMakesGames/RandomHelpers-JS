"use strict";

Math.randomInt = function(exclusiveMax) {
    return Math.floor(Math.random() * exclusiveMax);
};

Math.randomDiceRoll = function(numberOfDice, diceSize) {
    let total = 0;

    for(let i = 0; i < numberOfDice; i++)
        total += Math.randomInt(diceSize);

    return total;
};

Math.randomFromList = function(list) {
    return list[Math.randomInt(list.length)];
};

Math.randomString = function(allowedCharacters, length) {
    let string = '';

    for(let i = 0; i < length; i++)
        string += allowedCharacters[Math.randomInt(allowedCharacters.length)];
};

Math.randomBool = function() {
    return Math.random() < 0.5;
};

export {}
