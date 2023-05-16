// Table des étudiants
// *******************
const students = [
  [54, 'Durand'],
  [55, 'Dupond'],
  [3, 'Smith'],
  [28, 'Toto']
];

// Table des notes par etudiant
// ******************************************************************************************************************************************
const ranges = [
  [54, [12, 14, 17]],
  [55, [13, 4, 19]],
  [3, [10, 10, 10]]
];

// Table des cours
// ******************************************************************************************************************************************
const courses = [
  [1, "Algo"],
  [2, "Math"],
  [3, "Anglais"],
  [12, "Web"],
  [25, "Macramé"]
];

// Table des cours par étudiant
// ******************************************************************************************************************************************
const coursesByStudent = [
  [54, [1, 2, 3]],
  [55, [1, 3]],
  [3, [2, 3, 12]]
];

/**
* getStudentById
* Retourne le nom de l'étudient dont l'id est passé en paramètre
* @param {*} studId 
* @returns 
*/

// ******************************************************************************************************************************************

// function getStudentById(studId) {
//   const matchingStudents = students.map(student => {
//     if (student[0] === studId) {
//       return student[1];
//     }
//   });
//   return matchingStudents.length ? matchingStudents[0] : "Inconnu";
// }

function centerStringInColumn(colWidth, str) {
  let nbspacetoadd = (colWidth - str.length) / 2;
  let leftstr = str.padStart(nbspacetoadd + str.length);
  return leftstr.padEnd(colWidth);
}


const getStudentById = (studId) => {
  const matchingStudent = students.find(student => student[0] === studId);
  return matchingStudent ? matchingStudent[1] : "Inconnu";
}

const getRangesByStudId = (sId) => {
  const matchingRange = ranges.find(range => range[0] === sId);
  return matchingRange ? matchingRange[1] : [];
}

const getAverage = (notes) => {
  return (notes.reduce((acc, note) => acc + note, 0) / notes.length).toFixed(2);
}

const getAverageByStudId = (sId) => {
  const notesEtudiant = getRangesByStudId(sId);
  return notesEtudiant.length > 0 ? getAverage(notesEtudiant) : 0;
}

const showClassStudentsAverage = () => {
  const display1 = '*'.padEnd(50, '*');
  const display2 = ' '.padEnd(50, ' ');
  const courseTitles = courses.reduce((acc, course) => {acc[course[0]] = course[1]; return acc}, {});

  console.log(display1);
  console.log("*" + centerStringInColumn(23, "Prénom") + "*" + centerStringInColumn(24, "Moyenne") + "*");
  console.log(display1);

  students.forEach(function([studId, _]) {
      const stdname = getStudentById(studId);
      const stdavg = getAverageByStudId(studId);
      // const stdnotes = getRangesByStudId(studId);
      const coursesStudied = coursesByStudent.find(([id, _]) => id === studId)?.[1]?.map(cId => courseTitles[cId]) || [];

      console.log(`* ${stdname.padEnd(22, ' ')}* ${stdavg || 'Pas de note'.padEnd(23, ' ')}*`);
  });

  console.log(display1);
}

showClassStudentsAverage();