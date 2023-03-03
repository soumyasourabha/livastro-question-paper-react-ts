import * as React from 'react';
import './style.css';
import { style } from './style';
import Form from './Form';

export default function Answer({ questions }) {
  return (
    <div>
      <div style={style.container}>
        <div style={style.header}>
          {questions?.map((q, index) => {
            return (
              <div key={q.questionid}>
                {q.question}
                {q.questionoption.map((opt) => {
                  return (
                    <Form
                      key={opt.optionid}
                      questions={questions}
                      currentPage={index}
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
}
