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

/**
 * getStudentById
 * Retourne le nom de l'étudient dont l'id est passé en paramètre
 * @param {*} studId 
 * @returns 
 */
function getStudentById(studId){
    for(let i=0; i < students.length; i++){
        if(students[i][0] === studId) {
            return students[i][1];
        }
    }
    return "Inconnu"
}


function getCourseById(cId){
    for(let i=0; i <courses.length; i++) {
        if(courses[i][0] === cId) {
            return courses[i][1];
        }
    }
    return "inconnu"
}

function getRangesByStudId(sId) {
    for (let i=0; i<ranges.length; i++){
        if (ranges[i][0] === sId){
            return ranges[i][1]
        }
    }
    return []
}

function getAverage(notes){
    let somme = 0;
    for(let i=0; i < notes.length; i++){
        somme += notes[i];
    }
    return (somme/notes.length).toFixed(2)
}

function getAverageByStudId(sId){

    // 1°) Obtenir els notes notes de l'étudiant sId
    let notesEtudiant = getRangesByStudId(sId);

    // 2°) Calculer la moyenne à partir des notes obtenues en 1°)
    let moyEtudiant = 0;
    if(notesEtudiant.length > 0){
        moyEtudiant = getAverage(notesEtudiant);
    }

    return moyEtudiant;

}
    const display = '*';
    console.log(display.padEnd(50, '*'));
    console.log("*" + centerStringInColumn(23, "Name") + "*" + centerStringInColumn(24, "Average") + "*"); console.log(display.padEnd(50, '*'));

function showClassStudentsAverage(){

    let studId = 0;
    let stdname = "";
    let stdavg = 0;

    for(let i=0; i < students.length; i++){
        studId = students[i][0];
        stdname = getStudentById(studId);
        stdavg = getAverageByStudId(studId);
        stdnotes = getRangesByStudId(studId);
        if (stdnotes.length === 0) {
            console.log("*" + centerStringInColumn(22, stdname) + "*" + centerStringInColumn(25, "Pas de note") + "*");
        } else {
            console.log("*" + centerStringInColumn(22, stdname) + "*" + centerStringInColumn(25, stdavg) + "*");
        }
    }
}
    
    showClassStudentsAverage();

    console.log(display.padEnd(50, '*'));


    function centerStringInColumn(colWidth, str) {
    let nbspacetoadd = (colWidth - str.length) / 2;
    let leftstr = str.padStart(nbspacetoadd + str.length);
    return leftstr.padEnd(colWidth);
    }
    
    console.log("*" + centerStringInColumn(23, "hello") + "*" + centerStringInColumn(24, "world") + "*"); 
    