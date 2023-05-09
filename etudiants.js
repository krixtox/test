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

// function getStudentById(studentId) {
  
//     for (let i = 0; i < students.length; i++) {
//       if (students[i][0] === studentId) {
//         return students[i][1];
//       }
//     }
//   return "inconnu";
//   }

//   console.log(getStudentById(55));


  // function getCoursesById(coursesId) {
  
  //   for (let i = 0; i < courses.length; i++) {
  //     if (courses[i][0] === coursesId) {
  //       return courses[i][1];
  //     }
  //   }
  // return "inconnu";
  // }

  // console.log(getCoursesById(25));


  function getRangesById(rangesId) {
    for (let i = 0; i < ranges.length; i++) {
      if (ranges[i][0] === rangesId) {
        return ranges[i][1];
      }
    }
    return "inconnu";
  }
  
  function calculateMoyenne(ranges) {
    let sum = 0;
    for (let i = 0; i < ranges.length; i++) {
      sum += ranges[i];
    }
    return (sum / ranges.length).toFixed(2)
  }
  
  function getAverageById(rangesId) {
    let ranges = getRangesById(rangesId);
    if (ranges === "inconnu") {
      return "inconnu";
    }
    let average = calculateMoyenne(ranges);
    return average;
  }
  
  let rangesId = 54;
  let average = getAverageById(rangesId);
  console.log(average);  