//quiz code

var quiz = [
  ['The named value passed to a function is called a(n):', 'parameter'],
  ['The real value passed to a function is called a(n):', 'argument'],
  ['The method used with the object array that combines it with another array and returns as a string is:', 'concat'],
  ['array.(blank) searches an array for a specified value', 'indexOf'],
  ['The method used to add an item to the end of an array is:', 'push'],
  ['The method used to add an item to the beginning of an array is:', 'unshift'],
  ['The method used to remove or retrieve the first item from an array is:', 'shift'],
  ['One of the most common uses of a for loop in conjunction with an array is called (blank) through and array.', 'iterating'],
];

var correct = [];
var incorrect = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var question;
var answer;
var response;
var html;

function print (message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for ( i = 0; i < quiz.length; i++) {
  question = quiz[i][0];  
  answer = quiz[i][1];
  response = prompt(question);

  if ( response === answer) {
    correctAnswers += 1; 
    correct.push(question);
    listHTML = '<ol>';
    listHTML += '<li>' + correct[i] + '</li>'; 
    listHTML += '</ol>';
  }  
    else {
      incorrectAnswers += 1;
      incorrect.push(question);
      listHTML = '<ol>';
      listHTML += '<li>' + incorrect[i] + '</li>'; 
      listHTML += '</ol>';
    }
} 

html = "You had " + correctAnswers + " correct! Good job!";
print(listHTML);
print(html);

