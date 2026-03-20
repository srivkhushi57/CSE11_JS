document.getElementById("btn1").addEventListener("click", function() {
    let x = document.getElementById("inputText").value;
    document.getElementById("heading").innerText = x;
});

document.getElementById("btn2").addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
});

document.getElementById("btn3").addEventListener("click", function() {
    document.getElementById("para").style.fontSize = "20px";
});

document.getElementById("btn4").addEventListener("click", function() {
    let p = document.getElementById("para");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
});