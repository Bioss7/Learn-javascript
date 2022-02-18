function makeUser(name, age) {
    return {
        name: name,
        age: age
        // ...другие свойства
    }
}

let user = makeUser("John", 30);
console.log(user.name); // John

// В примере выше название свойств name и age совпадают с названиями переменных, которые мы подставляем в качестве значений этих свойств. 
// Такой подход настолько распространён, что существуют специальные короткие свойства для упрощения этой записи.
// Вместо name:name мы можем написать просто name:

function makeUser1(name, age) {
    return {
      name, // то же самое, что и name: name
      age   // то же самое, что и age: age
      // ...
    };
}

let user = {
    name,  // тоже самое, что и name:name
    age: 30
};