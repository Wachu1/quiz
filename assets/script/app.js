const questions = [
    {
        question: "How many Irish people believe technology is negatively impacting family life, according to the report?",
        choices: ["a) 85 percent", "b) 44 percent", "c) 77 percent", "d) 23 percent"],
        answer: "b) 44 percent"
    },
    {
        question: "What is one of the key implications of digitalization mentioned in the report?",
        choices: ["a) Reduced reliance on broadband", "b) Increased access to traditional media", "c) Dependence on smartphones", "d) Impeding interpersonal communication"],
        answer: "c) Dependence on smartphones"
    },
    {
        question: "How often do 85 percent of surveyed individuals in Ireland access the internet?",
        choices: ["a) Once a week", "b) Once a month", "c) Once a day or more", "d) Once a hour"],
        answer: "c) Once a day or more"
    },
    {
        question: "Which demographic group shows a higher percentage of internet usage, according to the report?",
        choices: ["a) Middle-class", "b) Working-class", "c) Both have equal usage", "d) Low-class"],
        answer: "a) Middle-class"
    },
    {
        question: "What is the preferred communication method among three out of four individuals, as per the report?",
        choices: ["a) Phone calls", "b) Instant messaging apps like WhatsApp", "c) Letters", "d) Fax"],
        answer: "b) Instant messaging apps like WhatsApp"
    },
];

let currentQuestion = 0;
let score = 0;
let quizCompleted = false;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');

    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = '';

    questions[currentQuestion].choices.forEach(choice => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'choice';
        radio.value = choice;
        radio.id = "radioChoice"
        // choicesElement.appendChild(radio);

        const label = document.createElement('label');
        label.textContent = choice;
        label.id = "labelChoice"
        // choicesElement.appendChild(label);
        const divItem = document.createElement('div');
        divItem.classList = "choice-item";
        divItem.appendChild(radio);
        divItem.appendChild(label);
        choicesElement.appendChild(divItem);
    });
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name=choice]:checked');
    if (selectedChoice && !quizCompleted) {
        if (selectedChoice.value === questions[currentQuestion].answer) {
            score++;
        }
    }
}

function nextQuestion() {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = `Zdobyłeś(aś) ${score}/${questions.length} punktów.`;
        const textCheck = document.querySelector("#check");
        textCheck.style.display = "flex";
        const nextButton = document.getElementById('nextButton');
        nextButton.insertAdjacentHTML('afterend', '<button onclick="printHelloWorld()">Print Hello World</button>');
        currentQuestion = 0;
        score = 0;
        quizCompleted = true;
    }
}



displayQuestion();


