function splitOnDoubleLetter(input){
//     const inputWord = [input];

// console.log(inputWord);

for (let i = 0; i < input.length; i++) {
    
    // console.log(input[i]);
    if (input[i] === input[i-1]) {
        console.log("hej");
        input.splice(input[0],input[i-1]);
        // input.splice(input[i], input.length);
    }
    else{
        console.log("blä");
    }
}

// for (const character of input) {
//     if (character = ) {
        
//     }
// }

}

splitOnDoubleLetter("letter");