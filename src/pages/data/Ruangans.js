import { useEffect, useState } from "react";

export default function Ruangans() {
const [ruangan, setRuangan] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/ruangan",{
      headers: {
        "mode": "no-cors"
      }})
      .then((response) => response.json())
      .then((json) => setRuangan(json))
  }, []);
  return (
        <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ruangan.map((data) => (
          <tr key={data.id}>
            <td>{data.nama_ruangan}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
