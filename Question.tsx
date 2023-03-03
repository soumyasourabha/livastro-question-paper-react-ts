import * as React from 'react';
import './style.css';
import { style } from './style';

export default function Question({ currentPage, questions, setAnswer }) {
  const handleChange = (value) => {
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
        (questions[currentPage] as any).answer = ans;
      } else {
        (questions[currentPage] as any).answer.push(value);
      }
    } else {
      (questions[currentPage] as any).answer = value;
    }
    setAnswer([...questions]);
    console.log(questions[currentPage]);
  };

  return (
    <div>
      <div style={style.topBodyContainer}>
        {questions[currentPage].question}
      </div>
      <div style={style.bodySpacer}></div>

      {questions[currentPage].questionoption.map((opt) => {
        return (
          <div style={style.bodySpacer} key={opt?.optionid}>
            <input
              type={questions[currentPage].questiontype}
              style={style.noSpace}
              id={opt?.optionid.toString()}
              name="option-name"
              checked={questions[currentPage]?.answer === opt.optionvalue}
              onChange={(e) => {
                handleChange(opt.optionvalue || (e.target as any).value);
              }}
            />
            <text style={style.bodyOption}>{opt.optionvalue}</text>
          </div>
        );
      })}
    </div>
  );
}
