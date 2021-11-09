"use strict"

const movie = +prompt('сколько фильмов посмотрели в последнее время?','');

const moviesDB = {
    count: movie,
    actors: {}
};

const a = prompt('какой актер играл в главной роли?',''),
      b = prompt('насколько оцените его игру (1-10) ?',''),
      c = prompt('какой актер играл в главной роли?',''),
      d = prompt('насколько оцените его игру (1-10) ?','');

moviesDB.actors[a] = b;
moviesDB.actors[c] = d;

console.log(moviesDB);