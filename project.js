"use strict";
let level100 = [];
let level200 = [];
let level300 = [];
let level400 = [];
function addStudentToLevel(students) {
    let totalStudentLevel = {
        FIRSTYEAR: level100,
        SECONDYEAR: level200,
        THIRDYEAR: level300,
        FOURTHYEAR: level400
    };
    for (let student of students) {
        if (student.level === 100 /* studentLevel.firstYear */) {
            level100.push(student);
        }
        else if (student.level === 200 /* studentLevel.secondYear */) {
            level200.push(student);
        }
        else if (student.level === 300 /* studentLevel.thirdYear */) {
            level300.push(student);
        }
        else if (student.level === 400 /* studentLevel.fourthYear */) {
            level400.push(student);
        }
        else {
            console.log('error level,can\'t add to object');
        }
    }
    return totalStudentLevel;
}
const studentsInfo = [{
        name: 'Adeleke Tolu',
        level: 200 /* studentLevel.secondYear */,
        age: 20,
        bestSubject: 'Physics'
    },
    {
        name: 'Adeyemi Dayo',
        level: 100 /* studentLevel.firstYear */,
        age: 20,
        bestSubject: 'PE'
    },
    {
        name: 'Adeleke Sade',
        level: 400 /* studentLevel.fourthYear */,
        age: 21,
        bestSubject: 'Physics'
    },
    {
        name: 'Inuoluwadunsimilopolopo',
        level: 200 /* studentLevel.secondYear */,
        age: 20,
        bestSubject: 'Physics'
    }];
console.log(addStudentToLevel(studentsInfo));
