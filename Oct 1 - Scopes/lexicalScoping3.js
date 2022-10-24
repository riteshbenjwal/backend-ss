var teacher = "Sanket";
function fun() {
  var teacher = "Pulkit";
  teachingAssistant = "vibhav";
  console.log(teacher);
  console.log(teachingAssistant);
}

console.log(teachingAssistant); // It will throw reference error because fun function is not called yet.
fun();
console.log(teacher); // sanket
