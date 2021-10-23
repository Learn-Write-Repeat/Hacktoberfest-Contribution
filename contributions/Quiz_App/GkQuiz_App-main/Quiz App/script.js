const quizDB = [
    {
        question: "Q1. The tree sends down roots from its branches to the soil is know as:",
        A: "Oak",
        B: "Pine",
        C: "Banyan",
        D: "Palm",
        ans: "Banyan"
    },

    {
        question: "Q2: Electric bulb filament is made of",
        A: "Copper",
        B: "Aluminium",
        C: "Lead",
        D: "Tungsten",
        ans: "Tungsten"
    },

    {
        question: "Q3: Brass gets discoloured in air because of the presence of which of the following gases in air?",
        A: "Oxygen",
        B: "Hydrogen Sulphide",
        C: "Carbon dioxide",
        D: "Nitrogen",
        ans: "Hydrogen Sulphide" 
    },

    {
        question: "Q4: Which of the following is a non metal that remains liquid at room temperature?",
        A: "Phosphorus",
        B: "Bromine",
        C: "Chlorine",
        D: "Helium",
        ans: "Bromine" 
    },

    {
        question: "Q5: Chlorophyll is a naturally occurring chelate compound in which central metal is",
        A: "Copper",
        B: "Magnesium",
        C: "Iron",
        D: "Calcium",
        ans: "Magnesium" 
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQues= () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.A;
    option2.innerText = questionList.B;
    option3.innerText = questionList.C;
    option4.innerText = questionList.D;
}
loadQues();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currentAnsEle)=>{
        if(currentAnsEle.checked) {
            answer = currentAnsEle.id;
        }
        //return answer;
    });
    return answer;
};
submit.addEventListener('click', () => {
    const checkedAns = getCheckAnswer();
    console.log(checkedAns);

    if(checkedAns == quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    // const deselectAll = () => {
    //     answers.forEach((currentAnsEle) => currentAnsEle.checked = false);
    // }

    if(questionCount < quizDB.length) {
        loadQues();     
    } else {
        showScore.innerHTML = `
             <h3>You scored ${score}/${quizDB.length}</h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});