function calculateResult() {

    const n = parseInt(document.getElementById("subjects").value);

    let total = 0;

    for (let i = 0; i < n; i++) {
        let x = parseFloat(prompt("Enter marks for subject " + (i + 1)));
        total += x;
    }

    let avg = total / n;

    let grade;

    if (avg >= 90) {
        grade = "A+";
    }
    else if (avg >= 70) {
        grade = "B";
    }
    else if (avg >= 40) {
        grade = "C";
    }
    else {
        grade = "D";
    }

    let r;

    if (avg >= 40)
        r = "Pass";
    else
        r = "Fail";

    document.getElementById("Result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average: " + avg + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + r;
}