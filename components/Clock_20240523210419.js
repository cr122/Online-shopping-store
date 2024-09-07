import { useState, useEffect } from 'react';

export default function Clock(props) {
    //const [date, setDate] = useState(null); // Note: Never set this to unknown data obtained at run time (ie: new Date(), a random number, etc.) - see: https://nextjs.org/docs/messages/react-hydration-error
  return (
    <p>
      Locale: {props.locale}: <mark>TODO: Render Locale-Dependant Clock Here</mark>
    </p>
  );
}