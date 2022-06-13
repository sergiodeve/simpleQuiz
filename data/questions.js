import { Question } from "../models/Question.js";
import {data} from './data.js';

//rrecorremos el array de data
export const arrPreguntas = data.map( question => new Question(question.question, question.choices, question.answer));



