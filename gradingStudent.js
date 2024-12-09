function gradingStudent(grades) {
  return grades.map((grades) => {
    if (grades < 38) {
      return grades;
    }
    const new_grade = Math.ceil(grades / 5) * 5;
    if (new_grade - grades < 3) {
      return new_grade;
    }
    return grades;
  });
}

const grades = [73, 67, 38, 33];
const result = gradingStudent(grades);
console.log(result);
