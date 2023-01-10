import { useState, useEffect } from 'react';
import abby from './db.json';
import './App.css';

function App() {
  const [abbyId, setAbbyId] = useState(-1);

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
    <div className="App">
      <h1 style={{ marginBottom: '6px' }}>Dear A.I.</h1>
      <p style={{ margin: '0 6px 8px', maxWidth: '450px' }}>
        Made possible by Abigail Van Buren's "Dear Abby" advice column. And
        OpenAI's ChatGPT.
        <br />
        There are currently {abby.length} entries in the database.
      </p>

      {abbyId !== -1 ? (
        <>
          <div className="btns">
            <button onClick={rerollId} style={{ width: 'fit-content' }}>
              Reroll
            </button>
            <button onClick={getLast} style={{ width: 'fit-content' }}>
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
