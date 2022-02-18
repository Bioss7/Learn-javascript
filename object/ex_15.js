// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

const user = {
    name: "John",
    surname: "Smith",
};

console.log(user);

user['surname'] = "Pete";

console.log(user);

delete user.surname;
console.log(user);
