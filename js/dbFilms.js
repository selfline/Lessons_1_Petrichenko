"use strict";

const moviesDB = {
    count: 0,
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        moviesDB.count = +prompt('сколько фильмов посмотрели в последнее время?', '');
    
        while (moviesDB.count == '' || moviesDB.count == null || isNaN(moviesDB.count)) {
            moviesDB.count = +prompt('сколько фильмов посмотрели в последнее время?', '');
        }
    },
    rememberFilms: function() {
        for (let i = 0; i < 2; i++) {
            const property = prompt('какой актер играл в главной роли?', ''),
                  value = +prompt('насколько оцените его игру (1-10) ?', '');
        
            if (property != null && value != null && property != '' && value != '' && property.length < 50) {
                moviesDB.actors[property] = value;
            } else {
                i--;
            }
        }
    },
    showDB: function(hidden) {
        if (!hidden) {
            console.log(moviesDB);
        }
    },
    toggleVisibleDB: function() {
        if (moviesDB.privat) {
            moviesDB.privat = false;
        } else {
            moviesDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === '' || genre == null) {
                console.log('некорректные данные');
                i--;
            } else {
                moviesDB.genres[i - 1] = genre;
            }
        }
        moviesDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    }
};

// console.log(moviesDB);

// setTimeout(showDB, 4000, moviesDB.privat);

// встроенная функция задержки выполнения другой функции (и т.п.?)
// setTimeout(function() {
//     console.log(1);
// }, 3000);
