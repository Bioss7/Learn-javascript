let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
console.log(bag);

// Квадратные скобки дают намного больше возможностей, чем запись через точку. 
// Они позволяют использовать любые имена свойств и переменные, хотя и требуют более громоздких конструкций кода.

// Подведём итог: в большинстве случаев, когда имена свойств известны и просты, используется запись через точку. 
// Если же нам нужно что-то более сложное, то мы используем квадратные скобки.