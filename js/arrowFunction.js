//если параметр один, то можно без скобок ()
//если операция в теле одна, то можно без скобок {}
let newUser = Name => console.log("Hello " + Name);
newUser('Вася');

// Возвращение объекта
// Объект также определяется с помощью фигурных скобок, но при этом он заключается в круглые скобки ({...}):
const user = (userName, userAge) => ({name: userName, age: userAge});
const tom = user("Tom", 34);
console.log(tom);