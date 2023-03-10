import { useState, useEffect } from 'react';
import abby from './db.json';
import './App.css';

function App() {
  const [abbyId, setAbbyId] = useState(-1);
  const [page, setPage] = useState(-1);
  const [theme, setTheme] = useState('light');

  const rerollId = () => {
    setAbbyId(Math.floor(Math.random() * abby.length));
    setPage(abby.length - 1);
  };

  const getLast = () => {
    if (abbyId) {
      if (page > 0 && page < abby.length) {
        setPage(page - 1);
      }
      setAbbyId(page);
    } else {
      setPage(abby.length - 2);
      setAbbyId(abby.length - 1);
    }
  };

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour > 18 || hour < 6) {
      setTheme('dark');
    }
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
        There are currently {abby.length} entries in the database.
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
              From Recent ({abbyId ? page + 1 : abby.length})
            </button>
          </div>
          <div className="card">
            <p className="inherit-width">
              <strong>Publish Date: </strong>
              {abby[`${abbyId}`]['date']}
            </p>
            <hr />
            <p className="inherit-width">
              <strong>Concern:</strong>
            </p>
            <div>{abby[`${abbyId}`]['concern']}</div>
            <hr />
            <p className="inherit-width">
              <strong>Abby (thoughtful person writer):</strong>
            </p>
            <div>{abby[`${abbyId}`]['abbyResponse']}</div>
            <hr />
            <p className="inherit-width">
              <strong>ChatGPT (artificial intelligence):</strong>
            </p>
            <div>{abby[`${abbyId}`]['aiResponse']}</div>
          </div>
          <a
            href="https://freeonlinesurveys.com/s/uYjmPoRB"
            target="_blank"
            rel="noreferrer"
            style={{ marginBottom: '14px', fontSize: '1.2em' }}
          >
            Take the Dear A.I. Survey
          </a>
        </>
      ) : (
        'loading...'
      )}
    </div>
  );
}

export default App;
