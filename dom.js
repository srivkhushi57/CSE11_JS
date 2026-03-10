const result= document.getElementById("para");
result.innerHTML="my self";
result.innerText="my self";
result.title="myname";
console.log(result);

const x=document.getElementsByClassName("p1");
console.log(x);
x[0].innerHTML="cse11";
x[1].innerHTML="khushi";
x[2].innerHTML="js";

const result2=document.getElementsByTagName("p");
result2[2].innerHTML="this is a pet";
result2[1].style.color="blue";
result2[0].innerText="my paragraph";

const test=document.querySelector("ul li:nth-child(3)");
test.style.backgroundColor="green";
test.style.padding="10px";

const test2=document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor="green";
    test2[x].style.margin="10px";
    test2[x].style.color="blue";
}