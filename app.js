let result =document.querySelector("#result");
let playerCounter =document.querySelector("#player-counter");
let compCounter = document.querySelector("#comp-counter");
let you=0;
let comp=0;


function Randomider(value){
    let randomInt;
    let word;
    const min = 1;
    const max = 3;
    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    if(randomInt === 1){
        word = "Rock";
    }
    else if(randomInt === 2){
        word = "Paper";
    }
    else{
        word = "Scissor";
    }
    
    if( randomInt === value){
        result.innerText=`oh no its a draw , The computer put ${word}`;
    }
    else if((value === 1 && randomInt === 2) || (value === 2 && randomInt === 3) || (value === 3 && randomInt === 1)){
         result.innerText=`Oh no you lose , The computer put ${word}`;
        comp+=1;
        compCounter.textContent = comp;

    }
    else{
         result.innerText=`You Win , The computer put ${word}`;
         you+=1;
         playerCounter.textContent = you;
    }
}

function clearDisplay(){
    compCounter.textContent=0;
    playerCounter.textContent = 0;
    comp=0;
    you=0;
    result.innerText=`The game has been reset`;
    

}

//  1- rock ; 2- paper; 3-scissor
