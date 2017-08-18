//=========Let consider Dummy-Hardcoded Database==========================
const users = [{
    id: 1,
    name: 'Shravan',
    schoolId: 101
}, {
    id: 2,
    name: 'Ashwini',
    schoolId: 999
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 60
}, {
    id: 2,
    schoolId: 999,
    grade: 90
},
    {
        id: 3,
        schoolId: 101,
        grade: 70
    }
];

//==========Services Functions==============================================

const getUser = function (id) {
    return new Promise(function (resolve, reject) {
        const user = users.find(function (userObject) {
            return userObject.id === id;//comparing passed id with Object id
        });
        if (user) {
            resolve(user)
        } else {
            reject('unable to find user with id of ' + id)
        }

    });
};

const getGrades = function (schoolId) {
  return new Promise(function (reslove,reject) {
      const grade = grades.filter((function (gradeObject) {
          return gradeObject.schoolId === schoolId;
      }));
      if(grade){
          reslove(grade)
      }else {
          reject('unable to find user with id of '+ schoolId);
      }

      // reslove(grades.filter(function (grade) {
      //     grade.schoolId === schoolId;
      // }))

  })  
};

//======calling That getUser Function=============================================
getUser(1).then(function (user) {
    console.log(user)
}).catch(function (e) {
    console.log(e);
});
//======calling That getGrades Function=============================================
getGrades(999).then(function (grade) {
      console.log(grade);
  }).catch(function (e) {
      console.log(e);
  });
/*======OUTPUT=====================
* { id: 1, name: 'Shravan', schoolId: 101 }
[ { id: 2, schoolId: 999, grade: 90 } ]
* */