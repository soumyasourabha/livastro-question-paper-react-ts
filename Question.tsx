import * as React from 'react';
import './style.css';
import { style } from './style';
import Form from './Form';

export default function Question({ currentPage, questions, setAnswer }) {
  return (
    <div>
      <div style={style.topBodyContainer}>
        {questions[currentPage].question}
      </div>
      <div style={style.bodySpacer}></div>

      {questions[currentPage].questionoption.map((opt) => {
        return (
          <div style={style.bodySpacer} key={opt?.optionid}>
            <Form
              questions={questions}
              currentPage={currentPage}
              optionObj={opt}
              readOnly={false}
            />
          </div>
        );
      })}
    </div>
  );
}
