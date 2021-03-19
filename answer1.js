const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];


function convertArrayToObject(arr) {
    for(const [name,skills,scores] of arr) {
        console.log(`name:${name},skills:[${skills}],scores:[${scores}]`);
    }
}

convertArrayToObject(students);