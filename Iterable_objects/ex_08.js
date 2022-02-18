let str = '𝒳😂';

// разбивает строку на массив её элементов
let chars = Array.from(str);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2

// В отличие от str.split, этот метод в работе опирается на итерируемость строки, 
// и поэтому, как и for..of, он корректно работает с суррогатными парами.

// Технически это то же самое, что и:

let str1 = '𝒳😂';

let chars1 = []; // Array.from внутри себя выполняет тот же цикл
for (let char of str1) {
  chars1.push(char);
}

console.log(chars1);