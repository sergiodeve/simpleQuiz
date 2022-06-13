export class Question{
    //JS DOCS comentarios dentro de js para daefinir tipos de datos. 
    /**
     * 
     * @param {string} text this is a text of the question
     * @param {string[]} choices the choices of the question
     * @param {string} answer the correct answer of question
     */
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    /**
     * 
     * @param {string} choice one of the choises
     * @returns {boolean} return true is answered is correct
     */
    correctAnswer(choice){
        //retorna true si choice es igual a answer
        return choice === this.answer;
    }
};




