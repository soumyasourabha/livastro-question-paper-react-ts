import * as React from 'react';
import './style.css';
import { style } from './style';
import { data } from './questions';
import Question from './Question';
import Answer from './Answer';

export const QuestionContext = React.createContext<any>(null);

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [questions, setAnswer] = React.useState(data.questions);
  const [isSubmitted, submit] = React.useState(false);

  return (
    <div>
      {!isSubmitted ? (
        <div style={style.container}>
          <div style={style.header}>
            {currentPage !== 0 && (
              <div
                style={style.backImage}
                onClick={() => {
                  console.log(questions);
                  setCurrentPage(currentPage - 1);
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ecommerce-c4540.appspot.com/o/back.png?alt=media&token=1c6689e8-d95c-4221-aba2-45a36586ad4d"
                  alt="Back"
                  height="100%"
                  width="100%"
                />
              </div>
            )}
          </div>
          <div style={style.bodyContainer}>
            <QuestionContext.Provider value={setAnswer}>
              <Question currentPage={currentPage} questions={questions} />
            </QuestionContext.Provider>

            <div
              style={{
                marginTop: '50px',
              }}
            ></div>
          </div>
          <div style={style.footerPlacement}>
            <div style={style.buttonPlacement}>
              {data.questions.length - 1 !== currentPage ? (
                <button
                  style={style.matButton}
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                  }}
                >
                  <span style={{ color: '#fff' }}>NEXT</span>
                </button>
              ) : (
                <button
                  style={style.matButton}
                  onClick={() => {
                    submit(true);
                  }}
                >
                  <span style={{ color: '#fff' }}>SUBMIT</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Answer questions={questions} />
      )}
    </div>
  );
}
