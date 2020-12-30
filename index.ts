declare global {
    interface Math {
        randomInt(exclusiveMax: number): number;
        randomDiceRoll(numberOfDice: number, diceSize: number): number;
        randomFromList(list: any[]): any
        randomString(allowedCharacters: string, length: number): string;
        randomBool(): boolean;
    }
}

Math.randomInt = function(exclusiveMax: number): number {
    return Math.floor(Math.random() * exclusiveMax);
};

Math.randomDiceRoll = function(numberOfDice: number, diceSize: number): number {
    let total = 0;

    for(let i = 0; i < numberOfDice; i++)
        total += Math.randomInt(diceSize);

    return total;
};

Math.randomFromList = function(list: any[]): any {
    return list[Math.randomInt(list.length)];
};

Math.randomString = function(allowedCharacters: string, length: number): string {
    let string = '';

    for(let i = 0; i < length; i++)
        string += allowedCharacters[Math.randomInt(allowedCharacters.length)];

    return string;
};

Math.randomBool = function(): boolean {
    return Math.random() < 0.5;
};

export {}
