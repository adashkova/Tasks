// 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
newArr = arr.map((el, i) => {
  if (i >= 4 && i <= 7) {
    el = 0;
  }
  return el;
});

console.log(newArr);
//2 
let n = 7;
let m = 7;
let size = 5;
let mas = [];
for (let i = 0; i < m; i++) {
  mas[i] = [];
  for (let j = 0; j < n; j++) {
    if (i === j) {
      mas[i][j] = size * 2;
    } else {
      mas[i][j] = size;
    }
  }
}
console.log('matrix', mas);

// 3
function sqTrapezoid(a, b, h) {
  let sq = 0;

  Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(h)
    ? console.log((sq = 0.5 * (a + b) * h))
    : console.log(`Please input right numbers in sm`);
}

sqTrapezoid(5, 7, 4);
// 4
function getVowels(str) {
    let string = str.toLowerCase().split('')
    let counter = 0
    const vowels = ['a', 'o', 'i', 'u', 'e']
    string.forEach(vow => {
       if(vowels.includes(vow)) {
           counter += 1
       } 
    });
   
    console.log(counter)
}
getVowels('I like apples!')
// 5
function getLongestWord(string) {
    const words = string.split(' ');
    let biggest = words[0];
    words.forEach(word => {
      if (word.length > biggest.length) {
        biggest = word;
      }
    });
    console.log(biggest.length);
  }
getLongestWord('I hate bananas')
// 6
function replaceLetters(string) {
    let words = string.split(' ');
    let newString = [];
    const asterics = ['*', '*'];
  
    words.forEach(word => {
      if (word.length >= 6) {
        const newWord = word.split('').splice(2 - word.length);
        const answer = [ ...asterics,...newWord].join('');
        newString.push(answer);
      }
    });
    console.log(newString.join(' '));
  }
  
  replaceLetters('The besteee jfhdhghgo is giutghtiu 123456789');