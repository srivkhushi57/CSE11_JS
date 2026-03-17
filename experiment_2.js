let employees = [];

function addEmployee(){

let name = document.getElementById("name").value;
let id = document.getElementById("id").value;
let salary = Number(document.getElementById("salary").value);
let dept = document.getElementById("dept").value;

let emp = {
name: name,
id: id,
salary: salary,
dept: dept
};

employees.push(emp);

alert("Employee added");
}

function showEmployees(){

let text = "";

for(let e of employees){
text += e.name + " - " + e.salary + "<br>";
}

document.getElementById("output").innerHTML = text;

}

function totalSalary(){

let total = 0;

for(let e of employees){
total += e.salary;
}

document.getElementById("output").innerHTML = "Total Salary = " + total;

}