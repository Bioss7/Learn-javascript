const user = {
    name: "John",
    surname: "Smith",
};

const emptyObj = {};

// Проверка на пустоту
function isEmpty(obj){
    for(let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false + " есть свойства";
    }
    return true + " нету свойств";
}

console.log(isEmpty(user));
console.log(isEmpty(emptyObj));