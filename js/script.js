'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        (this.count < 10) ? alert('Просмотрено довольно мало фильмов')
            : ((this.count >= 10) && (this.count < 30)) ? alert('Вы классический зритель')
                : (this.count >= 30) ? alert('Вы киноман')
                    : alert('Произошла ошибка');
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            while (this.genres[i - 1] == '' || this.genres[i - 1] == null ) {
                this.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}: `, '');
            }
        }
        this.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};
 
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB.movies);

