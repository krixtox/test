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
    [54, [12, 14, 17]],
    [55, [13, 4, 19]],
    [3, [10, 10, 10]]
];

// Table des cours
// ***************
const courses = [
    [1, "Algo"],
    [2, "Math"],
    [3, "Anglais"],
    [12, "Web"],
    [25, "Macramé"]
];

// Table des cours par étudiant
// ****************************
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

function getStudentById(studId) {
    for (let i = 0; i < students.length; i++) {
        if (students[i][0] === studId) {
            return students[i][1];
        }
    }
    return "Inconnu"
}


function getCourseById(cId) {
    for (let i = 0; i < courses.length; i++) {
        if (courses[i][0] === cId) {
            return courses[i][1];
        }
    }
    return "inconnu"
}

function getRangesByStudId(sId) {
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i][0] === sId) {
            return ranges[i][1]
        }
    }
    return []
}

function getAverage(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    return (somme / notes.length).toFixed(2)
}

function getAverageByStudId(sId) {

    // 1°) Obtenir els notes notes de l'étudiant sId
    let notesEtudiant = getRangesByStudId(sId);

    // 2°) Calculer la moyenne à partir des notes obtenues en 1°)
    let moyEtudiant = 0;
    if (notesEtudiant.length > 0) {
        moyEtudiant = getAverage(notesEtudiant);
    }

    return moyEtudiant;

}
const display1 = '*';
const display2 = ' ';

function showClassStudentsAverage() {
    let display1 = '*'.padEnd(50, '*');
    let display2 = ' '.padEnd(50, ' ');
  
    console.log(display1);
    console.log("*" + centerStringInColumn(23, "Prénom") + "*" + centerStringInColumn(24, "Moyenne") + "*");
    console.log(display1);
  
    students.forEach(function(student) {
        let studId = student[0];
        let stdname = getStudentById(studId);
        let stdavg = getAverageByStudId(studId);
        let stdnotes = getRangesByStudId(studId);
  
        if (stdnotes.length === 0) {
            console.log("* " + stdname.padEnd(22, ' ') + "* " + "Pas de note".padEnd(23, ' ') + "*");
        } else {
            console.log("* " + stdname.padEnd(22, ' ') + "* " + stdavg.padEnd(23, ' ') + "*");
        }
    });
  }

showClassStudentsAverage();

// ******************************************************************************************************************************************

console.log(display1.padEnd(50, '*'));
console.log(display2.padEnd(50, ' '));
console.log(display1.padEnd(50, '*'));


function centerStringInColumn(colWidth, str) {
    let nbspacetoadd = (colWidth - str.length) / 2;
    let leftstr = str.padStart(nbspacetoadd + str.length);
    return leftstr.padEnd(colWidth);
}

console.log("*" + centerStringInColumn(23, "Prénom") + "*" + centerStringInColumn(24, "Matières") + "*");
console.log(display1.padEnd(50, '*'));

// ******************************************************************************************************************************************

function getStudentCoursesById(sId) {
    for (let i = 0; i < coursesByStudent.length; i++) {
        if (coursesByStudent[i][0] === sId) {
            return coursesByStudent[i][1];
        }
    }
    return [];
}

function getCourseNameById(courseId) {
    for (let i = 0; i < courses.length; i++) {
        if (courseId === courses[i][0]) {
            return courses[i][1];
        }
    }
    return "";
}

function convertCourses(stuCoursesId) {
    let result = "";
    for (let i = 0; i < stuCoursesId.length; i++) {
        let courseName = getCourseNameById(stuCoursesId[i]);
        result += courseName;
        if (i < stuCoursesId.length - 1) {
            result += ", ";
        }
    }
    return result;
}

function showCoursesByStudent() {
    let output = "";

    for (let i = 0; i < students.length; i++) {
        let studId = students[i][0];
        let studname = students[i][1];
        let stuCoursesId = getStudentCoursesById(studId);
        let coursesName = convertCourses(stuCoursesId);

        // Reset output
        output = "";
        if (coursesName.length === 0) {
            output += "* " + studname.padEnd(22, ' ') + "* " + "Pas de matières".padEnd(23, ' ') + "*";
        } else {
            output += "* " + studname.padEnd(22, ' ') + "* " + coursesName.padEnd(23, ' ') + "*";
        }

        console.log(output);
    }

}

showCoursesByStudent();

console.log(display1.padEnd(50, '*'));
console.log(display2.padEnd(50, ' '));

// ******************************************************************************************************************************************

function getStudentsByCourseId(cId) {
    let studentsList = [];

    for (let i = 0; i < coursesByStudent.length; i++) {
        if (coursesByStudent[i][1].includes(cId)) {
            let studentId = coursesByStudent[i][0];
            let studentName = getStudentById(studentId);
            studentsList.push(studentName);
        }
    }

    return studentsList;
}

console.log(display1.padEnd(50, '*'));
console.log("*" + centerStringInColumn(23, "Matière") + "*" + centerStringInColumn(24, "Prénoms") + "*");
console.log(display1.padEnd(50, '*'));

function showStudentsByCourse() {
    let listStudByCourse = "";

    for (let i = 0; i < courses.length; i++) {
        let cId = courses[i][0];
        let courseName = courses[i][1];
        let studentsList = getStudentsByCourseId(cId);

        if (studentsList.length === 0) {
            listStudByCourse += "* " + courseName.padEnd(22, ' ') + "* " + "Pas d'étudiants".padEnd(23, ' ') + "*\n";
        } else {
            listStudByCourse += "* " + courseName.padEnd(22, ' ') + "* " + studentsList.join(", ").padEnd(23, ' ') + "*\n";
        }
    }

    listStudByCourse += display1.padEnd(50, '*');
    listStudByCourse = listStudByCourse.trim();

    return listStudByCourse;
}

const StudentListByCourse = showStudentsByCourse(courses);
console.log(StudentListByCourse);

// ******************************************************************************************************************************************
