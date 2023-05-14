const courses = [
    [1, "algo"],
    [2, "math"],
    [3, "anglais"],
    [12, "web"],
    [25, "macramé"]
  ];
  
  function convertCourses(stuCoursesId) {
    let result = "";
  
    for (let i = 0; i < stuCoursesId.length; i++) {
      for (let j = 0; j < courses.length; j++) {
        if (stuCoursesId[i] === courses[j][0]) {
          result += courses[j][1] + " ";
        }
      }
    }
  
    return result;
  }
  
  const stuCoursesId = [1, 2, 3];
  const coursesName = convertCourses(stuCoursesId);
  console.log(coursesName); // Output: "algo math anglais "