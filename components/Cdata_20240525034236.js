import { useState, useEffect } from 'react';
export default function Cdata(){
    const [users, setUsers] = useState([
        { user: 'fred', active: false, age: 40 },
        { user: 'pebbles', active: false, age: 1 },
        { user: 'barney', active: true, age: 36 },
      ]);

      return (
        if (!loading) {
            return <p>Done Loading! - TODO: Show the data here</p>
          } else {
            return null; // don't render anything - still loading
          }
}
