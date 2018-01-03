const users = [{
    id: 1,
    name: 'Andrew',
    schoolId: 101
},
{
    id: 2,
    name: 'jessica',
    schoolId: 999
},];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
},
{
    id: 2,
    schoolId: 999,
    grade: 100
},
{
    id: 3,
    schoolId: 101,
    grade: 80
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);
        if (user) {
            resolve(user);
        } else {
            reject(`unable to find user with id of ${id}.`);
        }
    });
};

const getGrade = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

const getstatus = (userId) => {
    var user;
    return getUser(userId)
        .then((tempuser) => {
            user = tempuser;
            return getGrade(user.schoolId)
                .then((grades) => {
                    //average
                    let average = 0;
                    if (grades.length > 0) {
                        average = grades.map((grade) => grade.grade).reduce((a, b) => (a + b) / grades.length);
                    }
                    //console.log(average);
                    //return the string
                    return `${user.name} has a ${average}% in the class.`;
                })
        });
};
//using async-await functionality
// ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('Mike');
//     })
// }

const getstatusAlt = async (userId) => {
    //When using Async function it always return promise with await you get the original value you want
    // throw new Error('This  is an Error');
    // return 'Mike';
    const user = await getUser(userId);
    const grades = await getGrade(user.schoolId);
    //average
    let average = 0;
    if (grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) => (a + b) / grades.length);
    }
    //console.log(user,grades,average);
    return `${user.name} has a ${average}% in the class.`;
};

getstatusAlt(1).then((status) => {
    console.log(status);
}).catch((e)=>{
    console.log(e);
})

// getstatus(123)
// .then((user)=>{
//     console.log(user);
// })
// .catch((e)=>{
//     console.log(e);
// })