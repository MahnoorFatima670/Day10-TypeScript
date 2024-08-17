var Student = /** @class */ (function () {
    function Student() {
        this.name = "";
        this.grade = 0;
    }
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Student.prototype.getRecord = function () {
        return {
            name: this.name,
            grade: this.grade,
        };
    };
    return Student;
}());
var student = new Student();
student.setName("Mahnoor Fatima");
student.setGrade(95);
console.log(student.getRecord()); // 
var Counter = /** @class */ (function () {
    function Counter() {
        this.counter = 0;
    }
    Counter.prototype.increment = function () {
        this.counter++;
    };
    Counter.prototype.decrement = function () {
        this.counter--;
    };
    Counter.prototype.getValue = function () {
        return this.counter;
    };
    return Counter;
}());
var cnt = new Counter();
cnt.increment();
cnt.increment();
cnt.increment();
console.log(cnt.getValue());
cnt.decrement();
console.log(cnt.getValue());
cnt.increment();
console.log(cnt.getValue());
cnt.decrement();
cnt.decrement();
console.log(cnt.getValue());