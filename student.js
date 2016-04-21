var Student = function(name, gender, grade, GPA, detentions, sleepinginClass, catchPhrase){
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA;
	this.detentions = detentions;
	this.sleepinginClass = sleepinginClass;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun = function(){
		 if (this.GPA > 2 && this.detentions < 10) {
			console.log("Student can have fun!")
		}
		else{
			console.log("Boo! Student cannot have fun.")
		}
	}
}

module.exports = Student;
