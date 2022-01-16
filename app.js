function splitOnDoubleLetter(input){
    let start = 0;
    let word = "";
    let arr =[];

    for (let i = 0; i < input.length; i++) {
        let temp = i+1;
        if (input[i] === input[temp]) {
            arr.push(input.slice(start, temp));
            word = input.slice(temp, input.length);
            start = temp; 
        }
    }
    arr.push(word);
    console.log(arr);
}

splitOnDoubleLetter("letterrs");