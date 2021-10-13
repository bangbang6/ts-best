"use strict";

    function Person(name, age) {
        this.name = "noname";
        this.age = 0;
        this.phone = '111';
        this.step = function (name) {
            return '123';
        };
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function (name) {
        console.log(this.name + '吃' + name);
    };
  

var bang = new Person('dd', 123);
console.log(bang);
bang.show('mm');
