function playGuessingGame(numToGuess,totalGuess){

    let countTotalGuess = 0;
    
    if(!totalGuess){totalGuess = 10}
    
    var text_to_prompt = "Enter a number between 1 and 100.";
    
    while(totalGuess>0){
    
    totalGuess--;
    
    countTotalGuess++;
    
    var input = prompt(text_to_prompt, input);
    
    if (input == null || input == ""){
    
    return 0;
    
    }
    
    else if(isNaN(input)){
    
    text_to_prompt = "Please enter a number.";
    
    totalGuess++;
    
    countTotalGuess--;
    
    }
    
    else if(input==numToGuess) {
    
    console.log(" You Guessed Correct");
    
    return countTotalGuess;
    
    }
    
    else if(input > numToGuess){
    
    text_to_prompt = input + " is too large. Guess a smaller number.";
    
    }
    
    else if(input < numToGuess){
    
    text_to_prompt = input + " is too small. Guess a larger number.";
    
    }
    
    }
    
    if(totalGuess==0){console.log("You Exceeded Guess Chances of " + countTotalGuess);
    
    return 0;}
    
    }