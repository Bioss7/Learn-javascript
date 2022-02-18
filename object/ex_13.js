// Цикл «for…in»
// Для перебора всех свойств объекта используется цикл for..in. Этот цикл отличается от изученного ранее цикла for(;;).

// for (key in object) {
//     // тело цикла выполняется для каждого свойства объекта
// }

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for(let key in user){
    // ключи
    console.log(key); // name, age, isAdmin
    // значения ключей
    console.log(user[key]); // John, 30, true
}