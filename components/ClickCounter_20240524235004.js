import { useState } from 'react';

export default function ClickCounter(props) {
  const [numClicks, setNumClicks] = useState(0);

  function increaseNumClicks(e, message) { // 'e' is the current event object
    console.log(message);
    setNumClicks(numClicks + 1);
  }
  
  return <button onClick={(e) => { increaseNumClicks(e, "Hello") }}>Clicks: {numClicks}</button>