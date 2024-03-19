let courseId = 1;

function addCourse() {
    const coursesDiv = document.getElementById("courses");
    const courseDiv = document.createElement("div");
    courseDiv.innerHTML = `
        <div>
            <label for="grade${courseId}">Grade:</label>
            <input type="number" id="grade${courseId}" min="0" max="100">
        </div>
        <div>
            <label for="credit${courseId}">Credit Hours:</label>
            <input type="number" id="credit${courseId}" min="1">
        </div>
    `;
    coursesDiv.appendChild(courseDiv);
    courseId++;
}

function calculateCGPA() {
    let totalCredits = 0;
    let weightedSum = 0;
    let courseCount = 0;

    for (let i = 1; i < courseId; i++) {
        const grade = parseFloat(document.getElementById(`grade${i}`).value);
        const credit = parseFloat(document.getElementById(`credit${i}`).value);

        if (!isNaN(grade) && !isNaN(credit) && credit > 0) {
            totalCredits += credit;
            weightedSum += grade * credit;
            courseCount++;
        }
    }

    if (courseCount === 0) {
        alert("Please add at least one course.");
        return;
    }

    const cgpa = weightedSum / totalCredits;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `CGPA: ${cgpa.toFixed(2)}`;
}
