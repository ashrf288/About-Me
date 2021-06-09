'use strict';


// //welcome prompt

let name=prompt('hello, what is your name ?');
let correctAnswers=0;

alert(`nice to meet you ${name} , welcome to the quize game (me editoin) were you have to answer a series of  question about me .
so if your ready click ok.  `);

// // first question

let myFavSport= prompt(`first question: do i like boxing?)

1- yes/y   2- no/n`).toLowerCase();

for(var i=0;i<2;i){
if(myFavSport== 'yes'|| myFavSport=='y' ){
    alert('you guessed it right, now go to the next question.');
    correctAnswers++;
    break;
    // console.log(myFavSport);
}else if (myFavSport=='no'|| myFavSport=='n') {
    alert(`you got it wrong `);
    // console.log(myFavSport);
    break;
}else {
        alert('you should answer with yes / y or no /n');
        myFavSport= prompt(`first question: do i like boxing? 
    
    
    1- yes/y   2- no/n `).toLowerCase();
    
}
}

// //secound question

let myFavCar= prompt(`second question: do i like lamborghini ca? 


1- yes/y   2- no/n `).toLowerCase();

for(var i=0;i<2;i){
    if(myFavCar== 'yes'|| myFavCar=='y' ){
        alert('you guessed it right, now go to the next question.');
        correctAnswers++;
        break;
        // console.log(myFavCar);
    }else if (myFavCar=='no'|| myFavCar=='n') {
        alert(`you got it wrong `);
        // console.log(myFavCar);
        break;
    }else {
            alert('you should answer with yes / y or no /n');
            myFavCar= prompt(`second question: do i like lamborghini ca? 
            
            
            1- yes/y   2- no/n `).toLowerCase();
            
        
    }
    }
// 3rd question



let myFavFooda= prompt(`third question: do i like mansaf? 

1- yes/y   2- no/n `).toLowerCase();


for(var i=0;i<2;i){
    if(myFavFooda== 'yes'|| myFavFooda=='y' ){
        alert('you guessed it right, now go to the next question.');
        correctAnswers++;
        break;
        // console.log(myFavFooda);
    }else if (myFavFooda=='no'|| myFavFooda=='n') {
        alert(`you got it wrong `);
        // console.log(myFavFooda);
        break;
    }else {
            alert('you should answer with yes / y or no /n');
            myFavFooda= prompt(`third question: do i like mansaf? 

1- yes/y   2- no/n `).toLowerCase();
            
        
    }
    };



// 4th question
let myFavMovi= prompt(`fourth question: do i like the god father movie? 

    1- yes/y   2- no/n `).toLowerCase();

    for(var i=0;i<2;i){
        if(myFavMovi== 'yes'|| myFavMovi=='y' ){
            alert('you guessed it right, now go to the next question.');
            correctAnswers++;
            break;
            // console.log(myFavMovi);
        }else if (myFavMovi=='no'|| myFavMovi=='n') {
            alert(`you got it wrong `);
            // console.log(myFavMovi);
            break;
        }else {
                alert('you should answer with yes / y or no /n');
                myFavMovi= prompt(`fourth question: what is my favorite  movie? 
                
                    1- yes/y   2- no/n `).toLowerCase();
                
                
            
        }
        }



// fifth question 
let myFavAthlete= prompt(` is messi my favorite athlete? 

1- yes/y   2- no/n `).toLowerCase();
                

for(var i=0;i<2;i){
    if(myFavAthlete== 'no'|| myFavAthlete=='n' ){
        alert('you guessed it right, now go to the next question.');
        correctAnswers++;
        break;
        // console.log(myFavAthlete);
    }else if (myFavAthlete=='yes'|| myFavAthlete=='y') {
        alert(`you got it wrong `);
        // console.log(myFavAthlete);
        break;
    }else {
            alert('you should answer with yes / y or no /n');
            myFavAthlete= prompt(` is messi my favorite athlete? 

            1- yes/y   2- no/n `).toLowerCase();
                            
            
            
        
    }
    }





//6th question

let luckyNum=prompt(`so ${name} can you guess my lucky number?
hint ( its between 1-8) take a guess below . `);



  for (var i=1;i<=4;i++){
      var attempt= 4-i;
      if (luckyNum == 4){
          alert(`yay, ${name} you got it right it is 4 `);
          correctAnswers=correctAnswers+1;
          break;
      }else if (luckyNum < 4 ) {
         luckyNum= prompt(`no ${name} go higher attempts left ${attempt} `)
      }else if (luckyNum > 4 ) {
        luckyNum= prompt(`no ${name} go lower attempts left ${attempt}`)
    } else {
        luckyNum= prompt(`this is not a valid choice pls choose a number  between 
        1 and 8 attempts left ${attempt}`);
    } if (attempt==1 && luckyNum != 4 ){
        alert(`ohh your out of attempts the number was 4`);
    } 
      
  }

//7th question 
  let myFavMovie=['avengers','the god father', 'black panther'];

  let guess =prompt(`what is my favorite movie?`).toLowerCase();
   

  var result= myFavMovie.includes(guess);
  console.log(result);


for (var i =0;i<6;i++){
    var attempts=5-i
    var result= myFavMovie.includes(guess);
    if (result==true){
        alert(`you got it right`);
        correctAnswers=correctAnswers+1;
        break;
      }else if(attempts==0){
          alert(`sorry ,you have no more attempts the  right answers are
           ${myFavMovie}`);
      }
      else{
        guess =prompt(`try again ? you have ${attempts} attempts left`);
      }
}
 

   





alert(`so ${name} I hope you liked that quiz and found it entertaining
have a good day number of correct answers  is ${correctAnswers} `);