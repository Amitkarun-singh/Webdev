/* 4. Highest Marks
A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
the marks of all five students in an array called "marks". Write a program that iterates through the array and
finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks.*/

let marks=[80, 90, 70, 50, 60];
let highestMarks=0;
for(let i=0; i<marks.length; i++){
    // if(marks[i]>highestMarks){
    //     highestMarks=marks[i];
    // }
    highestMarks = marks[i]>highestMarks ? highestMarks=marks[i]: highestMarks=highestMarks;
}
console.log("The highest marks scored by five student is:-" + highestMarks);