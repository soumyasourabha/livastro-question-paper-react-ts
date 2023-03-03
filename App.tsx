import * as React from 'react';
import './style.css';
import { style } from './style';
import { data } from './questions';
import Question from './Question';
import back from './back';
export default function App() {
  const questionPaper = data.questions;
  const [currentPage, setCurrentPage] = React.useState(0);

  return (
    <div>
      <div style={style.container}>
        <div style={style.header}>
           <img src={back} alt="Back" />
        </div>
        <div style={style.bodyContainer}>
          <Question currentPage={currentPage} />
          <div
            style={{
              marginTop: '50px',
            }}
          ></div>
        </div>
        <div style={style.footerPlacement}>
          <div style={style.buttonPlacement}>
            <button
              style={style.matButton}
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              <text style={{ color: '#fff' }}>NEXT</text>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
