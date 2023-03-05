import * as React from 'react';
import './style.css';
import { style } from './style';
import { QuestionContext } from './App';
import { IQuestion, IQuestionOption } from './questions';

type Props = {
  questions?: Array<IQuestion>;
  currentPage?: number;
  optionObj?: IQuestionOption;
  readOnly?: boolean;
};
const Form: React.FC<Props> = ({
  questions,
  currentPage = 0,
  optionObj,
  readOnly = false,
}) => {
  const handleChange = (value, setAnswer) => {
    if (questions[currentPage].questiontype === 'Checkbox') {
      if ((questions[currentPage] as any)?.answer === undefined) {
        (questions[currentPage] as any).answer = [value];
      } else if (
        (questions[currentPage] as any)?.answer &&
        (questions[currentPage] as any)?.answer?.length > 0 &&
        ((questions[currentPage] as any)?.answer as [])?.find(
          (item) => item === value
        )
      ) {
        const ans = new Set((questions[currentPage] as any)?.answer);
        ans.delete(value);
        (questions[currentPage] as any).answer = [...ans];
      } else {
        (questions[currentPage] as any).answer.push(value);
      }
    } else {
      (questions[currentPage] as any).answer = value;
    }
    setAnswer([...questions]);
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
                questions[currentPage].questiontype === 'Checkbox'
                  ? questions[currentPage]?.answer?.map((item) => item)
                  : questions[currentPage]?.answer
              }
              checked={
                questions[currentPage].questiontype === 'Checkbox'
                  ? questions[currentPage]?.answer?.filter(
                      (item) => item === optionObj.optionvalue
                    ).length > 0
                  : questions[currentPage].questiontype === 'Radio'
                  ? questions[currentPage]?.answer === optionObj.optionvalue
                  : null
              }
              onChange={(e) => {
                !readOnly
                  ? handleChange(
                      optionObj.optionvalue || (e.target as any).value,
                      setAnswer
                    )
                  : null;
              }}
            />
            <span style={style.bodyOption}>{optionObj.optionvalue}</span>
          </div>
        );
      }}
    </QuestionContext.Consumer>
  );
};

export default Form;
