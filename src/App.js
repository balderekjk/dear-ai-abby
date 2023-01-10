import { useState, useEffect } from 'react';
import abby from './db.json';
import './App.css';

// I am a 22-year-old, single male who recently graduated from college. I received lots of congratulations in person and by phone, text and social media. One of them came from a woman my age named "Bree." When I responded, I didn't recall ever having friended her but learned she's a cousin who lives back east. Apparently, her mother and my father are siblings. When I asked my father about it, he got very defensive and told me whoever it was I spoke to is a complete and total liar. Ordinarily, I might have agreed, but his reaction tells me there's a lot more to this. I want to find out more. Neither of my parents will say a word about it, and I don't know why. When I told them I plan to travel to the East Coast and meet Bree, I was told I may not be welcomed back if I do! This makes me wonder what horrible thing could have happened that would make a father consider disowning his son. Because my father won't share the truth with me, I am left with only this option. Pursue this, find part of my family I never knew existed and learn something, but lose the family I have and regret it forever. Any insight?

function App() {
  const [abbyId, setAbbyId] = useState(-1);

  const [day, setDay] = useState(0);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);

  const getRandomEntry = () => {
    setYear(Math.floor(Math.random() * 26) + 1996);
    setMonth(Math.floor(Math.random() * 12) + 1);
    let thirties = [9, 4, 6, 11];
    if (thirties.includes(month)) {
      setDay(Math.floor(Math.random() * 29) + 2);
    } else if (month === 2) {
      setDay(Math.floor(Math.random() * 27) + 2);
    } else {
      setDay(Math.floor(Math.random() * 30) + 2);
    }
  };

  const rerollId = () => {
    setAbbyId(-1);
    setAbbyId(Math.floor(Math.random() * abby.length));
  };

  useEffect(() => {
    getRandomEntry();
    rerollId();
  }, []);

  return (
    <div className="App">
      <a
        onClick={() => {
          getRandomEntry();
        }}
        href={`https://www.uexpress.com/_next/data/5xEVmFaW_yKOG8geoM0NT/life/dearabby/${year}/${month}/${day}.json?category=life&shortName=dearabby&publishDate=${year}&publishDate=${month}&publishDate=${day}`}
        target="blank"
      >
        Visit Abby
      </a>
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
