// function splitOnDoubleLetter(input){
//     let start = 0;
//     let word = "";
//     let arr =[];

//     for (let i = 0; i < input.length; i++) {
//         let temp = i+1;
//         if (input[i] === input[temp]) {
//             arr.push(input.slice(start, temp));
//             word = input.slice(temp, input.length);
//             start = temp; 
//         }
//     }
//     arr.push(word);
//     console.log(arr);
// }


function splitOnDoubleLetter(input) {
    let strings = "";
    let arr = [];

    for (let char in input) {
        if (input[char] == input[char - 1]) {
            strings += " ";
        }
        strings += input[char];
    }
    arr = strings.split(" ");
    console.log(arr);

}

splitOnDoubleLetter("letterrs");
splitOnDoubleLetter("mississippi");
