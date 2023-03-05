import * as React from 'react';
import './style.css';
import { style } from './style';
import Form from './Form';
import { IQuestion } from './questions';

type Props = {
  questions?: Array<IQuestion>;
};
const Answer: React.FC<Props> = ({ questions }) => {
  return (
    <div>
      <div style={style.container}>
        <div style={style.header}>
          {questions?.map((q, index) => {
            return (
              <div key={q.questionid}>
                {q.question}
                {q.questionoption.map((opt, optionIndex) => {
                  return (
                    <Form
                      key={opt.optionid}
                      questions={questions}
                      currentPage={index}
                      optionIndex={optionIndex}
                      optionObj={opt}
                      readOnly={true}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Answer;
