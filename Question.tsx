import * as React from 'react';
import './style.css';
import { style } from './style';
import Form from './Form';
import { IQuestion } from './questions';

type Props = {
  questions?: Array<IQuestion>;
  currentPage?: number;
};
const Question: React.FC<Props> = ({ currentPage, questions }) => {
  return (
    <div>
      <div style={style.topBodyContainer}>
        {questions[currentPage].question}
      </div>
      <div style={style.bodySpacer}></div>

      {questions[currentPage].questionoption.map((opt, optionIndex) => {
        return (
          <div style={style.bodySpacer} key={opt?.optionid}>
            <Form
              questions={questions}
              currentPage={currentPage}
              optionObj={opt}
              optionIndex={optionIndex}
              readOnly={false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Question;
