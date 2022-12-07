// Write your solution in this file!

let employee = {
    name: 'value',
    streetAddress: 'value'
};



function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
};

updateEmployeeWithKeyAndValue(employee, 'age', 25);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 30);

 function deleteFromEmployeeByKey(employee, key) {
    let noNameEmployee = {...employee};
    delete noNameEmployee[key];
    return noNameEmployee;

 }

 deleteFromEmployeeByKey(employee, 'name');

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
 };

 destructivelyDeleteFromEmployeeByKey(employee, 'name');