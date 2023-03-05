import * as React from 'react';
import './style.css';
import { style } from './style';
import { QuestionContext } from './App';
import { IQuestion, IQuestionOption } from './questions';

type Props = {
  questions?: Array<IQuestion>;
  currentPage?: number;
  optionObj?: IQuestionOption;
  optionIndex?: number;
  readOnly?: boolean;
};
const Form: React.FC<Props> = ({
  questions,
  currentPage = 0,
  optionObj,
  optionIndex = 0,
  readOnly = false,
}) => {
  const handleChange = (value: string, setAnswer: Function) => {
    const qus = questions;
    if (questions[currentPage].questiontype === 'Radio') {
      qus[currentPage].questionoption.map((item) => (item.selected = false));
      qus[currentPage].questionoption[optionIndex].selected = true;
    } else if (questions[currentPage].questiontype === 'Checkbox') {
      qus[currentPage].questionoption[optionIndex].selected =
        !qus[currentPage].questionoption[optionIndex].selected;
    } else {
      qus[currentPage].questionoption[0].optionvalue = value;
    }
    setAnswer([...qus]);
  };

  const checkRadioOrCheckBoxType = (currentPage: number): boolean => {
    return questions[currentPage].questiontype === 'Radio' ||
      questions[currentPage].questiontype === 'Checkbox'
      ? true
      : false;
  };
  return (
    <QuestionContext.Consumer>
      {(setAnswer) => {
        return (
          <div>
            <input
              readOnly={readOnly}
              type={questions[currentPage].questiontype}
              style={style.noSpace}
              id={optionObj?.optionid.toString()}
              name="option-name"
              value={
                checkRadioOrCheckBoxType(currentPage)
                  ? questions[currentPage].questionoption[optionIndex]
                      .optionvalue
                  : questions[currentPage].questionoption[0].optionvalue
              }
              checked={
                checkRadioOrCheckBoxType(currentPage)
                  ? questions[currentPage].questionoption[optionIndex].selected
                  : null
              }
              onChange={(e) => {
                !readOnly ? handleChange(e.target.value, setAnswer) : null;
              }}
            />
            {checkRadioOrCheckBoxType(currentPage) ? (
              <span style={style.bodyOption}>{optionObj.optionvalue}</span>
            ) : null}
          </div>
        );
      }}
    </QuestionContext.Consumer>
  );
};

export default Form;
