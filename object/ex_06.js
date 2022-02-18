let user = {
    name: "John",
    age: 30
};

let key = prompt("Что вы хотите узнать о пользователе?", "name");

// доступ к свойству через переменную
alert(user[key]); // John (если ввели "name")

// Запись «через точку» такого не позволяет:
let user1 = {
    name: "John",
    age: 30
};
  
let key = "name";
alert(user.key); // undefined