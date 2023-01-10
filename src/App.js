import { useState, useEffect } from 'react';
import abby from './db.json';
import './App.css';

function App() {
  const [abbyId, setAbbyId] = useState(-1);
  const [theme, setTheme] = useState('light');

  const rerollId = () => {
    setAbbyId(-1);
    setAbbyId(Math.floor(Math.random() * abby.length));
  };

  const getLast = () => {
    setAbbyId(-1);
    setAbbyId(abby.length - 1);
  };

  useEffect(() => {
    rerollId();
  }, []);

  return (
    <div className={`App ${theme}`}>
      <h1 style={{ marginBottom: '6px' }}>Dear A.I.</h1>
      <button
        onClick={() => {
          if (theme === 'light') {
            setTheme('dark');
          } else {
            setTheme('light');
          }
        }}
        className="moon-btn"
      >
        {theme === 'light' ? <>&#127769;</> : <>&#128161;</>}
      </button>
      <p style={{ margin: '0 6px 8px', maxWidth: '425px' }}>
        Made possible by Abigail Van Buren's "Dear Abby" advice column. And
        OpenAI's ChatGPT.
        <br />
        There are currently {abby.length} entries in the database. Updated
        daily.
        <br />
      </p>

      {abbyId !== -1 ? (
        <>
          <div className="btns">
            <button
              className="prime"
              onClick={rerollId}
              style={{ width: 'fit-content' }}
            >
              Reroll
            </button>
            <button
              className="prime"
              onClick={getLast}
              style={{ width: 'fit-content' }}
            >
              Last Added
            </button>
          </div>
          <div className="card">
            <p className="inherit-width">
              <strong>Date: </strong>
              {abby[`${abbyId}`]['date']}
            </p>
            <hr />
            <p className="inherit-width">
              <strong>Concern:</strong>
            </p>
            <div>{abby[`${abbyId}`]['concern']}</div>
            <hr />
            <p className="inherit-width">
              <strong>Abby:</strong>
            </p>
            <div>{abby[`${abbyId}`]['abbyResponse']}</div>
            <hr />
            <p className="inherit-width">
              <strong>ChatGPT:</strong>
            </p>
            <div>{abby[`${abbyId}`]['aiResponse']}</div>
          </div>
        </>
      ) : (
        'loading...'
      )}
    </div>
  );
}

export default App;
