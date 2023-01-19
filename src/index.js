module.exports = function toReadable(number) {
//function toReadable(number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numberString = number.toString();

    if (number < 0) throw new Error('Negative numbers are not supported.');

    if (number === 0) return 'zero';

    if (number < 20) {
        return units[number];
    }

    if (numberString.length === 2) {
        if (numberString[1] === '0') {
            return tens[numberString[0]];
        } else {
            return tens[numberString[0]] + ' ' + units[numberString[1]];
        }
    }

    if (numberString.length == 3) {
        let end = Number(numberString[1] + numberString[2]);
        let second = Number(numberString[1]);
        let third = Number(numberString[2]);
        if (third === 0 && second > 1) {
            return units[numberString[0]] + ' hundred ' + tens[second];
        } else if (third === 0 && second === 1) {
            return units[numberString[0]] + ' hundred ' + units[10];
        } else if (end > 10 && end < 20) {
            return units[numberString[0]] + ' hundred ' + units[end];
        } else if (numberString[1] === '0' && numberString[2] === '0')
            return units[numberString[0]] + ' hundred';
        else if (tens[numberString[1]].length === 0) {
            return units[numberString[0]] + ' hundred ' + tens[numberString[1]] + units[numberString[2]];
        } else {
            return units[numberString[0]] + ' hundred ' + tens[numberString[1]] + ' ' + units[numberString[2]];
        }

    }

}
//console.log(toReadable(30));
//console.log(toReadable(31));
