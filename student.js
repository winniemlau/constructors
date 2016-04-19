var prompt = require('prompt')
var Student = function(name, gender, grade, GPA, detentions, sleepinginClass, catchPhrase){
	this.name - name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA;
	this.detentions = detentions;
	this.sleepinginClass = sleepinginClass;
	this.catchPhrase = catchPhrase;	

	var canStudentHaveFun = function(detentions, GPA){
		if(detentions<10 && GPA >= 2){
			console.log("Can have fun!")
		}
	}
}

 prompt.start();

 prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function (err, result) {
  studentObject = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase)
    studentObject.canStudentHaveFun();
  });


module.exports = Student;