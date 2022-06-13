import { arrPreguntas} from './data/questions.js'
import {Quiz} from './models/Quiz.js';
import UI from './models/UI.js';

/**
 * 
 * @param {quiz} quiz  the main quiz object
 * @param {UI} ui class UI
 */

const renderPage = (quiz, ui)=>{

    if(quiz.isEnded()){
        console.log(quiz.score)
        ui.showScores(quiz.score)
    }else{
        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice)=>{
            quiz.guess(currentChoice);
            renderPage(quiz, ui);
        });
        ui.showProgress(quiz.questionIndex + 1, arrPreguntas.length);
    }
};

            
/**
 * 
 * @param {Quiz} quiz the main quiz object 
 * @param {U} ui ui object 
 */
function main(){
    const quiz = new Quiz(arrPreguntas)
    const ui = new UI();
    renderPage(quiz, ui);
};

main();
            
                       

            

            
   
    



    
    
   
    


/* const renderPage = (quiz, ui)=>{
   if (quiz.isEnded()){
       ui.showScores(quiz.score)
   }else{
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
        quiz.guess(currentChoice)
       renderPage(quiz,ui)
    });
    ui.showProgress(quiz.questionIndex + 1 , questions.length)
   }
};
       
function main(){
    const quiz =  new Quiz(questions)
    const ui = new UI()

    renderPage(quiz, ui)
    
     
 }
 main()
     */
    





       

        
        


