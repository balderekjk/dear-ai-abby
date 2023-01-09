import { useState, useEffect } from 'react';
import abby from './db.json';
import './App.css';

function App() {
  const [abbyId, setAbbyId] = useState(-1);

  const [day, setDay] = useState(0);
  // const [year, setYear] = useState(0);
  // const [month, setMonth] = useState(0);

  // const getRandomEntry = () => {
  //   setYear(Math.floor(Math.random() * 26) + 1996);
  //   setMonth(Math.floor(Math.random() * 12) + 1);
  //   let thirties = [9, 4, 6, 11];
  //   if (thirties.includes(month)) {
  //     setDay(Math.floor(Math.random() * 29) + 2);
  //   } else if (month === 2) {
  //     setDay(Math.floor(Math.random() * 27) + 2);
  //   } else {
  //     setDay(Math.floor(Math.random() * 30) + 2);
  //   }
  // };

  const rerollId = () => {
    setAbbyId(-1);
    setAbbyId(Math.floor(Math.random() * abby.length));
  };

  useEffect(() => {
    // getRandomEntry();
    rerollId();
  }, []);

  return (
    <div className="App">
      {/* <a
        onClick={() => {
          getRandomEntry();
        }}
        href={`https://www.uexpress.com/_next/data/5xEVmFaW_yKOG8geoM0NT/life/dearabby/${year}/${month}/${day}.json?category=life&shortName=dearabby&publishDate=${year}&publishDate=${month}&publishDate=${day}`}
        target="blank"
      >
        Visit Abby
      </a> */}
      <h1 style={{ marginBottom: '6px' }}>Dear A.I.</h1>
      <p style={{ marginTop: 0, maxWidth: '450px' }}>
        Made possible by Abigail Van Buren's advice column. And OpenAI's
        ChatGPT.
        <br />
        There are currently {abby.length} entries in the database.
      </p>

      {abbyId !== -1 ? (
        <>
          <button onClick={rerollId} style={{ width: 'fit-content' }}>
            Reroll
          </button>
          <div className="card">
            <p className="inherit-width">
              <strong>Concern:</strong>
            </p>
            <div>{abby[`${abbyId}`]['concern']}</div>
            <hr />
            <p className="inherit-width">
              <strong>ChatGPT3:</strong>
            </p>
            <div>{abby[`${abbyId}`]['aiResponse']}</div>
            <hr />
            <p className="inherit-width">
              <strong>Abby:</strong>
            </p>
            <div>{abby[`${abbyId}`]['abbyResponse']}</div>
          </div>
        </>
      ) : (
        'loading...'
      )}
    </div>
  );
}

export default App;
