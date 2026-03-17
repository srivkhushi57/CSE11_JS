var text='{"employees":['+
'{"firstname":"john","lastname":"doe"},'+
'{"firstname":"anna","lastname":"smith"},'+
'{"firstname":"peter","lastname":"jones"}]}';

obj=JSON.parse(text);
document.getElementById("demo").innerHTML=
obj.employees[1].firstname+" "+obj.employees[1].lastname;
