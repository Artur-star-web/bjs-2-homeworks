function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
  if (!this.marks) {
    console.log("Студент отчислен, добавление оценок невозможно");
    return;
  }
  this.marks.push(...marksToAdd);
};

Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((total, mark) => total + mark, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};