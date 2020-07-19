'use strict';
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberMyFilms(){
    let question = true;
    let a = {}; let b = {}; let i = 1;
    while (question == true) {
    
        do {
            a = prompt('Один из последних просмотренных фильмов?', '');
        }
        while ((a.length == 0) || ((a.length) > 50));
    
        do {
            b = prompt('На сколько оцените его?', '');
        }
        while ((b == 0) || (b > 50));
    
        personalMovieDB.movies[a] = b;
    
        question = confirm('Вы хотите проддолжить ввод фильмов?');
        i++;
    }
}
rememberMyFilms();

function detectPersonalLevel(){
(personalMovieDB.count < 10) ? alert('Просмотрено довольно мало фильмов')
: ((personalMovieDB.count >= 10) && (personalMovieDB.count < 30)) ? alert('Вы классический зритель')
: (personalMovieDB.count >= 30) ? alert('Вы киноман')
: alert('Произошла ошибка');
}
detectPersonalLevel();

function writeYourGenres(){
    for(let i = 1;i <= 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i}: `, '');
    }
}
writeYourGenres();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

console.log(personalMovieDB.movies);

 