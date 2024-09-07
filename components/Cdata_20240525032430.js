import { useState, useEffect } from 'react';
export default function Cdata(){
    const [users, setUsers] = useState([
        { user: 'fred', active: false, age: 40 },
        { user: 'pebbles', active: false, age: 1 },
        { user: 'barney', active: true, age: 36 },
      ]);

      return (
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Active</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user, index) => (
  <tr key={index}>
    <td>{user.user}</td>
    <td>{user.active ? 'yes' : 'no'}</td>
    <td>{user.age}</td>
  </tr>
))if (!loading) {
    return <p>Done Loading! - TODO: Show the data here</p>
  } else {
    return null; // don't render anything - still loading
  }}
          </tbody>
        </table>
      );

      
}
