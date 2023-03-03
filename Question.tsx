import * as React from 'react';
import './style.css';
import { style } from './style';
import { data } from './questions';

type answer = {
  questionId: number;
  optionId: number;
  answer: any;
};

export default function Question({ currentPage }) {
  const questionPaper = data.questions?.[currentPage];
  const [answer, setAnswer] = React.useState(
    Array<answer>(data.questions?.length)
  );

  const handleChange = (questionId, optionId, value) => {
    let ansObj = answer?.find((item) => item?.questionId === questionId);
    if (ansObj) {
      ansObj.answer = value;
      ansObj.optionId = optionId;
      setAnswer([
        ...answer.filter((ans) => ans?.questionId !== questionId),
        ansObj,
      ]);
    } else {
      setAnswer([
        ...answer,
        {
          questionId,
          optionId,
          answer: value,
        },
      ]);
    }
  };

  return (
    <div>
      <div style={style.topBodyContainer}>{questionPaper.question}</div>
      <div style={style.bodySpacer}></div>

      {questionPaper.questionoption.map((opt) => {
        return (
          <div style={style.bodySpacer} key={opt?.optionid}>
            <input
              type={questionPaper.questiontype}
              style={style.noSpace}
              value={
                answer?.find(
                  (ans) => ans?.questionId === questionPaper?.questionid
                )?.answer
              }
              id={opt?.optionid.toString()}
              name="option-name"
              onChange={(e) => {
                handleChange(
                  questionPaper?.questionid,
                  opt?.optionid,
                  e.target.value
                );
              }}
            />
            <text style={style.bodyOption}>{opt.optionvalue}</text>
          </div>
        );
      })}
    </div>
  );
}
