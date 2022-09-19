import { useEffect, useState } from "react";

export default function Dokters() {
const [dokter, setDokter] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/dokter",{
      headers: {
        "mode": "no-cors"
      }})
      .then((response) => response.json())
      .then((json) => setDokter(json))
  }, []);
  return (
        <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Spesialis</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dokter.map((data) => (
          <tr key={data.id}>
            <td>{data.nama_dokter}</td>
            <td>{data.spesialis}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
