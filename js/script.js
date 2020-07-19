'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let question = true;
let a = []; let b = []; let i = 1;
while (question == true) {

    do {
        a[i] = prompt('Один из последних просмотренных фильмов?', '');
    }
    while ((a[i].length == 0) || ((a[i].length) > 50));

    do {
        b[i] = prompt('На сколько оцените его?', '');
    }
    while ((b[i] == 0) || (b[i] > 50));

    personalMovieDB.movies[a[i]] = b[i];

    question = confirm('Вы хотите проддолжить ввод фильмов?');
    i++;
}

(personalMovieDB.count < 10) ? alert('Просмотрено довольно мало фильмов')
: ((personalMovieDB.count >= 10) && (personalMovieDB.count < 30)) ? alert('Вы классический зритель')
: (personalMovieDB.count >= 30) ? alert('Вы киноман')
: alert('Произошла ошибка');
