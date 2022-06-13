import { Question } from "./Question.js";

export class Quiz {
    
    questionIndex = 0;
    score = 0;
    /**
     * 
     * @param {Question[]} questions  
     */
    constructor(questions){
        this.questions = questions;
    }
    /**
     * 
     * @returns {Question} the question found
     */
    //method to get question index
    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }
    
    isEnded(){
        return this.questions.length === this.questionIndex;
    }
    //select option from user
    guess(answer){
       /*  const boton = document.getElementsByClassName('button');
        boton.addEventListener('click', console.log('click')) */
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }
        this.questionIndex++
    }
};
         
        
    
    
    
