// const courses = [
//     [1, "algo"],
//     [2, "math"],
//     [3, "anglais"],
//     [12, "web"],
//     [25, "macramé"]
//   ];
  
  
//   function convertCourses(stuCoursesId) {
//     let output = "";
  
//     for (let i = 0; i < stuCoursesId.length; i++) {
//       for (let j = 0; j < courses.length; j++) {
//         if (stuCoursesId[i] === courses[j][0]) {
//           output += courses[j][1] + " ";
//         }
//       }
//     }
  
//     return output;
//   }
  

//   const coursesName = convertCourses(stuCoursesId);
//   console.log(coursesName); // Output: "algo math anglais "

// ******************************************************************************************************************************************

function showStudentCourses() {
    let studId = 0;
    let stdname = "";

    for (let i = 0; i < students.length; i++) {
        studId = students[i][0];
        stdname = getStudentById(studId);
        let courses = [];

        for (let k = 0; k < coursesByStudent.length; k++) {
            if (coursesByStudent[k][0] === studId) {
                let courseIds = coursesByStudent[k][1];
                for (let j = 0; j < courseIds.length; j++) {
                    let courseId = courseIds[j];
                    let courseName = getCourseById(courseId);
                    courses.push(courseName);
                }
                break;
            }
        }

        if (courses.length === 0) {
            console.log("*" + centerStringInColumn(22, stdname) + "*" + centerStringInColumn(25, "Pas de matières") + "*");
        } else {
            console.log("*" + centerStringInColumn(22, stdname) + "*" + centerStringInColumn(25, courses.join(", ")) + "*");
        }
    }
    console.log(display1.padEnd(50, '*'));
}

showStudentCourses();

// ******************************************************************************************************************************************