import React, { useState } from 'react';

const Content = () => {
  const [displayText, setDisplayText] = useState('');

  const handleClick = () => {
    setDisplayText(document.getElementById('textarea').value);
  };

  return (
    <div className="App-content">
      <textarea id="textarea" placeholder="Enter some text..." />
      <button onClick={handleClick}>Write Something In The Text Area And Click Here To Display The Text</button>
      {displayText && <p>{displayText}</p>}
    </div>
  );
};

export default Content;

