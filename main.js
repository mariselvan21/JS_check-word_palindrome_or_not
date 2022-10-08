var word=prompt('Enter any word');
// console.log(word);
var wordArray=[...word];
var temp=[...wordArray];
// console.log(wordArray);
var revWordArray=temp.reverse();
// console.log(revWordArray);
// console.log(wordArray);
var join1=wordArray.join('');
// console.log(join1);
var join2=revWordArray.join('');
// console.log(join2);
if(join1==join2){
    console.log('This word is palindrome');
}
else{
    console.log('This word is not palindrome');
}