'use strict';

//scerat Number
let number = Math.trunc(Math.random()*20) + 1;

//score value 
let score = 10;

let highScore = 0;

let message = function(x){
    document.querySelector(".message").textContent = x;
}

//again btn
document.querySelector(".again").addEventListener("click" , function(){
    score = 10;
    document.querySelector(".score").textContent = score;
    number = Math.trunc(Math.random()*20) + 1;
    message("Stat guessing...");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
})


//check btn
document.querySelector(".check").addEventListener("click" , function(){
    const guess = Number(document.querySelector(".guess").value);

    if(!guess){
        message("⛔ No Number");
    }
    else if(guess>20){
        message("🙄 guess between 1 and 20");
    }
    else if(guess !== number){
        if(score>0){
            message(guess > number ? "📈 Too High" : "📉 Too Low");
        score--;
        document.querySelector(".score").textContent = score;
        }
        else{
            message("🙁 Game Over");
        }
    }
    else if(guess===number){
        message("🎉 Correct Number");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = number;


        if(score>highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }


});


