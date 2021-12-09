const arr = [2, 39, 6, 42, 13];
arr.sort(comparNum);
console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

function comparNum(a, b) {
    return b - a;
}

// алгоритм быстрой сортировки рассматривается здесь http://algolist.ru/sort/quick_sort.php


const numbers = [4, 2, 5, 1, 3];
numbers.sort((b, a) => {return a - b;});
console.log(numbers); // [ 5, 4, 3, 2, 1 ]