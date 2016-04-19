var Student = require('./student.js');

var Bus = function(driverName, color, gas){
	this.studentOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(n,g,gr,GPA,d,sic,cp){
		this.studentOnTheBus.push(new Student(n,g,gr,GPA,d,sic,cp));
	};
	this.busChatter = function(){
		for(i=0;i<this.studentOnTheBus.length;i++){
			console.log(this.studentOnTheBus())
		}
	}
}

module.exports = Bus;