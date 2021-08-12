module.exports = function toReadable (number) {
  let numbersFromZeroToNine = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
]

  let numbersFromTenToNineteen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
]

  let arr = `${number}`.split('').reverse();
  if (number === 0) {
      return 'zero'
  }
  
  if (arr.length < 2) {
      let name1 = +arr[0];
      return `${numbersFromZeroToNine[name1]}`
  } else if (arr.length < 3) {
      if (arr[1] === '1') {
        let name1 = +arr[0];
        return `${numbersFromTenToNineteen[name1]}`
      }else if (arr[1] === '0') {
        let name1 = +arr[0];
        return `${numbersFromZeroToNine[num3]} hundred ${numbersFromZeroToNine[name1]}`.trim();
        } else if (arr[1] === '2') {
        let name1 = +arr[0];
        return `twenty ${numbersFromZeroToNine[name1]}`.trim();
      } else if (arr[1] === '3') {
        let name1 = +arr[0];
        return `thirty ${numbersFromZeroToNine[name1]}`.trim();
      } else if (arr[1] === '4') {
        let name1 = +arr[0];
        return `forty ${numbersFromZeroToNine[name1]}`.trim();
      } else if (arr[1] === '5') {
        let name1 = +arr[0];
        return `fifty ${numbersFromZeroToNine[name1]}`.trim();
      } else if (arr[1] === '8') {
        let name1 = +arr[0];
        let name2 = +arr[1];
        return `${numbersFromZeroToNine[name2]}y ${numbersFromZeroToNine[name1]}`.trim();
      } else {
        let name1 = +arr[0];
        let name2 = +arr[1];
        return `${numbersFromZeroToNine[name2]}ty ${numbersFromZeroToNine[name1]}`.trim();
      }
  } else if (arr.length < 4) {
        let num3 = +arr[2];

        if (arr[1] === '1') {
        let name1 = +arr[0];
        return `${numbersFromZeroToNine[num3]} hundred ${numbersFromTenToNineteen[name1]}`
        } else if (arr[1] === '2') {
        let name1 = +arr[0];
        return `${numbersFromZeroToNine[num3]} hundred twenty ${numbersFromZeroToNine[name1]}`.trim();
        }else if (arr[1] === '0') {
        let name1 = +arr[0];
        return `${numbersFromZeroToNine[num3]} hundred ${numbersFromZeroToNine[name1]}`.trim();
        } else if (arr[1] === '3') {
        let name1 = +arr[0];
        return `${numbersFromZeroToNine[num3]} hundred thirty ${numbersFromZeroToNine[name1]}`.trim();
        } else if (arr[1] === '4') {
        let name1 = +arr[0];
        return `${numbersFromZeroToNine[num3]} hundred forty ${numbersFromZeroToNine[name1]}`.trim();
        } else if (arr[1] === '5') {
        let name1 = +arr[0];
        return `${numbersFromZeroToNine[num3]} hundred fifty ${numbersFromZeroToNine[name1]}`.trim();
        } else if (arr[1] === '8') {
        let name1 = +arr[0];
        let name2 = +arr[1];
        return `${numbersFromZeroToNine[num3]} hundred eighty ${numbersFromZeroToNine[name1]}`.trim();
        } else {
        let name1 = +arr[0];
        let name2 = +arr[1];
        return `${numbersFromZeroToNine[num3]} hundred ${numbersFromZeroToNine[name2]}ty ${numbersFromZeroToNine[name1]}`.trim();
        }
}
}
