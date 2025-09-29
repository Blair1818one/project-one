// Grade calculation in schools
const students = [
    {name: "Pops", Scores: [93, 82, 80] },
    {name: "Blair", scores: [69, 72, 79] },
    {name: "Sky", scores: [55, 59, 64] },
    {name: "Mukisa", scores: [99, 87, 94] },
    {name: "Dan", scores: [68, 59, 65] },
    {name: "Angla", scores: [37, 49, 29] },
    {name: "Blick", scores: [70, 69, 92] },
    {name: "Disear", scores: [40, 94, 68] },
];

// function: calculate the Average

function calculateAverage(scores) {
    let total = 0;

// using a loop to add all scores

for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}

return total / scores.length;

}

// The use of if-else conditions to assign grades

if (average >= 91) {
    return "A+"

} else if (average >= 81) {
    return "A"

}else if (average >= 74) {
    return "B+"

}else if (average >= 69) {
    return "B"

}else if (average >= 64) {
    return "C+"

}else if (average >= 59) {
    return "C"

}else if (average >= 55) {
    return "D+"

}else if (average >= 50) {
    return "D"

}else {
    return "F";
}


// loop for the main program

for (let i = 0; i < students.length; i++) {
    const students = students[i];

    const avg = calculateAverage(students.scores);

    const grade = getLetterGrade(avg);

    console.log("${student.name}: Average = ${avg.toFixed(2)}, Grade = ${grade}");
}