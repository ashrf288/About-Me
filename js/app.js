'use strict';


//welcome prompt

let name=prompt('hello, what is your name ?');

alert(`nice to meet you ${name} , welcome to the quize game (me editoin) were you have to answer a series of (5 yes or no) question about me .
so if your ready click ok.  `);

// first question

let myFavSport= prompt(`first question: what is my favorite soprt? 
(just type the name without the option number)

1- football   2- boxing`).toLowerCase();


if(myFavSport== 'boxing'){
    alert('you guessed it right, now go to the next question.')
    // console.log(myFavSport);
}else if (myFavSport=='football') {
    // console.log(myFavSport);
}else{ 
    alert('pls type on of the options (without the option num)');

}

//secound question
let myFavCar= prompt(`second question: what is my favorite car type? 
(just type the name without the option number)

1- lamborghini   2- lada`).toLowerCase();
if(myFavCar=='lamborghini' ){
    alert('you guessed it right, now go to the next question.')
    // console.log(myFavSport);
}else if (myFavCar=='lada'){
    // console.log(myFavSport);
}else {
    alert('pls type on of the options (without the option num)');
}
// 3rd question



let myFavFood= prompt(`third question: what is my favorite  food? 
(just type the name without the option number)

1- mansaf   2- bread`).toLowerCase();

if(myFavFood== 'mansaf'){
    alert('you guessed it right, now go to the next question.')
    // console.log(myFavFood);
}else if (myFavFood=='bread') {
    // console.log(myFavFood);
}else{ 
    alert('pls type on of the options (without the option num)');

}

// 4th question
let myFavMovie= prompt(`fourth question: what is my favorite  movie? 
(just type the name without the option number)

1- avengers   2- justice league`).toLowerCase();

if(myFavMovie== 'avengers'){
    alert('you guessed it right, now go to the next question.')
    // console.log(myFavMovie);
}else if (myFavMovie=='justice league') {
    // console.log(myFavMovie);
}else{ 
    alert('pls type on of the options (without the option num)');

}

// fifth question 
let myFavAthlete= prompt(`final  question: what is my favorite car athlete? 
(just type the name without the option number)

1- messi   2- mohammed ali`).toLowerCase();

if(myFavAthlete== 'mohammed ali'){
    alert('you guessed it right, now go to the next question.')
    // console.log(myFavAthlete);
}else if (myFavAthlete=='messi') {
    // console.log(myFavAthlete);
}else{ 
    alert('pls type on of the options (without the option num)');

}


alert(`so ${name} I hope you liked that quiz and found it entertaining
have a good day `);