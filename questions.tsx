import questions from './questions.json';

export interface QuestionPaper {
  questions?: Array<IQuestion>;
}
export interface IQuestion {
  questionid?: number;
  question?: string;
  questiontype?: string;
  attributetype?: number;
  validation?: boolean;
  questionoption?: Array<IQuestionOption>;
  answer?: any;
}
export interface IQuestionOption {
  optionid?: number;
  optionvalue?: string;
  price?: number;
  optionaction?: string;
  selected?: boolean;
  subquestion?: Array<any>;
}
export const data = questions as QuestionPaper;
