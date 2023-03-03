import * as React from 'react';
import './style.css';
import { style } from './style';
import { data } from './questions';
import Question from './Question';
export default function App() {
  const questionPaper = data.questions;
  const [currentPage, setCurrentPage] = React.useState(0);

  return (
    <div>
      <div style={style.container}>
        <div style={style.header}>
          <div style={style.backImage}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecommerce-c4540.appspot.com/o/back.png?alt=media&token=1c6689e8-d95c-4221-aba2-45a36586ad4d"
              alt="Back"
              height="100%"
              width="100%"
            />
          </div>
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
