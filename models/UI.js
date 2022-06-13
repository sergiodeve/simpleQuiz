class UI {
    constructor(){}
    /**
     * 
     * @param {string} text text of the question  
     */
    showQuestion(text){
        const questionTitle = document.getElementById('question');
        questionTitle.innerHTML = text;
    }
    /**
     * 
     * @param {string[]} choices  array with choices of the question
     */
    showChoices(choices, callback){
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        for(let i= 0; i < choices.length; i++){
            const button = document.createElement('button');
            button.classList.add('button');
            button.innerText = choices[i];
            button.addEventListener('click', () => callback(choices[i]));
            choicesContainer.append(button);
        }
    }
    /**
     * 
     * @param {number} score the total score 
     */
    showScores(score){
        const quizEndHTML = `
        <h1>result</h1>
        <h2 class="puntuacion">Score: ${score}</h2>
        `;
        const btnRestart = document.createElement('button');
        btnRestart.classList.add('btn-restart');
        btnRestart.textContent = 'RESTART';
        const element = document.getElementById('quiz');

        element.innerHTML = quizEndHTML;
        element.append(btnRestart);

        btnRestart.addEventListener('click', ()=>{
            window.location.reload();
        })
    };
    /**
     * 
     * @param {number} curentIndex 
     * @param {number} total 
     */
    showProgress(currentIndex, total){
        const element = document.getElementById('progress');
        element.innerHTML = `Question ${currentIndex} of ${total}`
    }
};

export default UI;
            
        


    