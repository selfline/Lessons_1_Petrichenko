"use strict";

let month;

function start() {
    month = +prompt('сколько фильмов посмотрели в последнее время?', '');

    while (month == '' || month == null || isNaN(month)) {
        month = +prompt('сколько фильмов посмотрели в последнее время?', '');
    }
}
start();

const moviesDB = {
    count: month,
    actors: {},
    genres: [],
    privat: false
};

function rememberFilms() {
    for (let i = 0; i < month; i++) {
        const property = prompt('какой актер играл в главной роли?', ''),
            value = +prompt('насколько оцените его игру (1-10) ?', '');
    
        if (property != null && value != null && property != '' && value != '' && property.length < 50) {
            moviesDB.actors[property] = value;
        } else {
            i--;
        }
    }
}
rememberFilms();

// в hidden попадёт false, а потом поменяется на обратное значение в if и БД выведется, а при исходном true скроется
function showDB (hidden) {
    if (!hidden) {
        console.log(moviesDB);
    }
}

showDB(moviesDB.privat);

function writeYourGenres () {
    for (let i = 1; i < 4; i++) {
        moviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres ();