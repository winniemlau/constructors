var prompt = require('prompt');
var Bus = require('./bus.js');
var Student = require('./student.js');
prompt.start();

var myBus = new Bus("Niki", "yellow", "full");

myBus.studentEntersBus("Kyle", "M", 12, 3.5, 2, "false", "Yo!");
myBus.studentEntersBus("Kayla", "F", 9, 4, 10, "false", "Time for ice cream");
myBus.studentEntersBus("Joe", "M", 10, 2, 15, "false", "Hello world!");
myBus.studentEntersBus("Harris", "M", 8, 1.5, 20, "true", "Goodnight");
myBus.studentEntersBus("Christine", "F", 12, 4, 0, "false", "Yolo");
myBus.studentEntersBus("Lola", "F", 11, 1.4, 17, "true", "LOL");
myBus.studentEntersBus("Ian", "M", 12, 3.8, 3, "false", "ROFL");
myBus.studentEntersBus("Fiona", "F", 8, 1.7, 13, "true", "Sup?");
myBus.studentEntersBus("Frank", "M", 9, 2.4, 5, "false", "Hey you!");
myBus.studentEntersBus("Jen", "F", 10, 3.3, 6, "true", "Have a great day!");

prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function (err, result) {
	myBus.studentEntersBus(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase)
	myBus.studentOnTheBus[0].canStudentHaveFun();
	console.log(myBus);
});
