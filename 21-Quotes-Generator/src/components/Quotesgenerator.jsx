import React, { useState, useEffect } from 'react';
import "./Quotesgenerator.css"
const Quotesgenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison, type.fit"
  });

  useEffect(() => {
    async function loadQuotes() {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        console.log(data);
        
        setQuotes(data);
      } catch (err) {
        console.error("Error loading quotes:", err);
      }
    }

    loadQuotes();
  }, []);

  const clickChange = () => {
    if (quotes.length === 0) return;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  return (
    <div className='container'>
      <div className='heading'>
        <h1>Quotes Generator</h1>
      </div>
      <div className='quotes'>
        <h2>{quote.text}</h2>
      </div>
      <div className='line'></div>
      <div className='bottom'>
        <div className='author'>
          <p>- {quote.author ? quote.author.split(",")[0] : "Unknown"}</p>
        </div>
        <button onClick={clickChange}>Next</button>
        <a href="https://github.com/selvalr" target='_blank' rel="noreferrer">
          Developer
        </a>
      </div>
    </div>
  );
};

export default Quotesgenerator;
