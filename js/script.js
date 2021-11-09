"use strict"

const month = +prompt('сколько фильмов посмотрели в последнее время?','');

const moviesDB = {
    count: month,
    actors: {}
};

for (let i = 0; i < month; i++) {
    const property = prompt('какой актер играл в главной роли?',''),
          value = +prompt('насколько оцените его игру (1-10) ?','');
    
    if (property != null && value != null && property != '' && value != '' && property.length < 50) {
        moviesDB.actors[property] = value;
    } else {
        i--;
    }
}

console.log(moviesDB);