// Table des étudiants
// *******************
const students = [
    [54, 'Durand'],
    [55, 'Dupond'],
    [3, 'Smith'],
    [28, 'Toto']
];

// Table des notes par etudiant
// ****************************
const ranges = [
    [54,[12, 14, 17]],
    [55, [13, 4, 19]],
    [3, [10, 10, 10]]
];

// Table des cours
// ***************
const courses = [
    [1, "algo"], 
    [2, "math"], 
    [3, "anglais"], 
    [12, "web"],
    [25, "macramé"]
];

// Table des cours par étudiant
// ****************************
const coursesByStudent = [
    [54, [1, 2, 3]], 
    [55, [1, 3]], 
    [3, [2, 3, 12]]
];


let studentId = 54;
let studentName = getStudentById(studentId, students);

function getStudentById(studentId, students) {
    let studentName = 0;
  
    for (let i = 0; i < students.length; i++) {
      if (students[i][0] === studentId) {
        studentName = students[i][1];
      }
    }
  
    return studentName;
  }

console.log(studentName);