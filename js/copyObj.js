//поверхностное клонирование объекта
function copy(mainObj) {
    let copyObj = {};

    let key;
    for (key in mainObj) {
        copyObj[key] = mainObj[key];
    }

    return copyObj;
}

const numbers = {
    a: 3,
    c: 5,
    g: {
        f: 10,
        us: 1
    }
};

const newNumbers = copy(numbers);
newNumbers.g = 15;
console.log(newNumbers);
console.log(numbers);

//вставка одного объекта в другой - результатом будет новый объект
const addObj = {
    as: 12,
    fd: 31
};
console.log(Object.assign(numbers, addObj));
//по этому же принципу можно склонировать объект
const clone = Object.assign({}, addObj);
clone.as = 17;
console.log('clone = ' + clone); //как вывести строку с объектом?


//клонирование объекта с помощью spread
const testObj = {
    vk: 1,
    ru: 2
};
const newTestObj = {...testObj};
newTestObj.vk = 20;
console.log(newTestObj);