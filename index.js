
const marks = prompt("Enter your marks here");
//console.log(" u entred", marks);
function getgrade(marks) {
if(marks>=79) {
    //return "u got A grade";
    alert("A grade");
}
else if(marks>=60 && marks<=79) {
    alert("u got B grade");
}
else if (marks>=49 && marks<=59) {
    alert("u got c grade");
}
else if (marks>=40 && marks<=49) {
    alert(" u got D grade");
}
else if (marks <40) {
    alert("u got F grade");
}
}
console.log(getgrade(marks));
