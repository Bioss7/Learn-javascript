let user = {};

// присваивание значения свойству
user["likes birds"] = true;

// получение значения свойства
console.log(user["likes birds"]); // true

// удаление свойства
delete user["likes birds"];
console.log("user", user);

let key = "likes birds";
// то же самое, что и user["likes birds"] = true;
user[key] = true;

console.log("user", user);

