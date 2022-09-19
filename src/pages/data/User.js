import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/users/${params.id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div>
      <div>NIM: {user.nim}</div>
      <div>Nama: {user.name}</div>
      <div>Email: {user.email}</div>
    </div>
  );
}

export default User;
