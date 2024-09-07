import { useState, useEffect } from 'react';
export default function Cdata(){
    const [users, setUsers] = useState([
        { user: 'fred', active: false, age: 40 },
        { user: 'pebbles', active: false, age: 1 },
        { user: 'barney', active: true, age: 36 },
      ]);

      return <div>{users[0].active && <p>{users[0].user} is Active!</p>}</div>
}
