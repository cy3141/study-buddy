let questions = [];
let counter = 0;
let mode = 1;


document.getElementById ("h1").textContent = "welcome to the study buddy";
document.getElementById ("directions").textContent = "enter questions into your buddy";
document.getElementById ("currentAction").textContent = "enter question: ";
document.getElementById ("question").textContent = "";


document.getElementById ("submitButton").onclick = function() {
    if (mode == 1) {
        questions [questions.length] = document.getElementById ("textBox").value;
        console.log (questions);
        document.getElementById ("h1").textContent = "study buddy";
        document.getElementById ("directions").textContent = "adding questions... click 'start study' when done";
    } else if (mode == 2) {
        if (counter < questions.length) {
            document.getElementById ("question").textContent = questions[counter];
            counter += 1
        } else {
            document.getElementById ("question").textContent = "~~~";
            document.getElementById ("currentAction").textContent = null;
            document.getElementById ("directions").textContent = "congrats, you've finished all your questions!";
        }
    }
}

document.getElementById ("study").onclick = function() {
    document.getElementById ("currentAction").textContent = "enter answer: ";
    document.getElementById ("directions").textContent = "study mode... enter and submit your answer to move to the next question";
    counter = 0;
    document.getElementById ("question").textContent = questions[counter];
    counter += 1;
    mode = 2;
}
