import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/login')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}> {/* Correction de la propriété key */}
              <td>{d.id}</td> {/* Utilisation de l'élément actuel "d" au lieu de "data" */}
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
