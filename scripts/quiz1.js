//quiz code

var quiz = [
  {
  question:'The named value passed to a function is called a(n):'
  answer: 'parameter'
  },
  {
  question:'The real value passed to a function is called a(n):'
  answer: 'argument'
  },
  {
  question:'The method used with the object array that combines it with another array and returns as a string is:'
  answer: 'concat'
  },
  {
  question:'array.(blank) searches an array for a specified value'
  answer: 'indexOf'
  },
  {
  question:'The method used to remove or retrieve the first item from an array is:'
  answer: 'shift'
  },
  {
  question:'One of the most common uses of a for loop in conjunction with an array is called (blank) through and array.'
  answer: 'iterating'
  }
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
  question = quiz[i].question;  
  answer = quiz[i].answer;
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

