// 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.splice(0, 3);
console.log(arr);

// 2

// 3
function sqTriangle(base, height) {
  console.log(Number.isInteger(base));
  let sq = 0;

  Number.isInteger(base) && Number.isInteger(height)
    ? console.log((sq = 0.5 * base * height))
    : console.log(`Please input right numbers in sm`);
}

sqTriangle(10, 20);

// 4
function stringInProcents(string) {
  const stringArr = string.split('');
  const app = [];
  const low = [];
  stringArr.forEach(letter => {
    letter == letter.toUpperCase() ? app.push(letter) : low.push(letter);
  });

  const procent = Math.trunc((+app.length / +low.length) * 100);
  console.log(procent);
}

stringInProcents('AbbbReee');
// 5
function getLengthOfWord(string) {
  const words = string.split(' ');
  let smallest = words[0];
  words.forEach(word => {
    if (word.length < smallest.length) {
      smallest = word;
    }
  });
  console.log(smallest.length);
}
getLengthOfWord('Gjhjfh jfghfhg jr jrghrthg jggjg');

// 6

function replaceLetters(string) {
  let words = string.split(' ');
  let newString = [];
  const asterics = ['*', '*', '*'];

  words.forEach(word => {
    if (word.length > 5) {
      const newWord = word.split('').splice(word.length - 5);
      const answer = [...newWord, ...asterics].join('');
      newString.push(answer);
    }
  });
  console.log(newString.join(' '));
}

replaceLetters('jsdfffiihh djffffhdg djfhdsjhg kk glkjgjkbnhgnhgn');
