const arr = [2, 39, 6, 42, 13];
arr.sort(compareNum);
console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

function compareNum(a, b) {
    return b - a;
}

// алгоритм быстрой сортировки рассматривается здесь http://algolist.ru/sort/quick_sort.php