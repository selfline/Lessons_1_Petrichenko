//ПРИМЕРЫ С КОЛЛБЭК:

//пример1
function learnJS(lang, callback) {
    console.log(lang);
    callback();
}
learnJS('JS', function() {
    console.log('call');
});

//пример2
const arr = [2, 3, 6, 42, 13];
arr.forEach(
    function(item, i , arr){console.log(`index: ${i} - value: ${item} in array ${arr}`);}
);