function askQuestions() {
    // Ask questions to gather conditions
    var question1 = prompt("Does she smile when she sees you? (Yes/No)");
    var question2 = prompt("Does she laugh at your jokes? (Yes/No)");
    var question3 = prompt("Does she make eye contact with you? (Yes/No)");
    var question4 = prompt("Does she give you compliments? (Yes/No)");
    var question5 = prompt("Does she initiate conversations with you? (Yes/No)");

    // Check conditions and display the result
    var resultElement = document.getElementById("result");
    var likes = (
        question1.toLowerCase() === "yes" ||
        question2.toLowerCase() === "yes" ||
        question3.toLowerCase() === "yes" ||
        question4.toLowerCase() === "yes" ||
        question5.toLowerCase() === "yes"
    );

    resultElement.innerHTML = likes ? "Yes, she might like you!" : "No, she may not be interested.";
}
