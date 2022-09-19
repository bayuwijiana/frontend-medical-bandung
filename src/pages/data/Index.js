import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>NIM</th>
          <th>Nama</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.nim}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/data/users/${user.id}`}>Detail</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;
