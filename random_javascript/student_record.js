var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for ( var i = 0; i < students.length; i ++) {
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
}

print(message);

