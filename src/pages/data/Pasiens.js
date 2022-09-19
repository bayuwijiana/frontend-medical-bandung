import { useEffect, useState } from "react";

export default function Pasiens() {
const [pasien, setPasien] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/pasien",{
      headers: {
        "mode": "no-cors"
      }})
      .then((response) => response.json())
      .then((json) => setPasien(json))
  }, []);
  return (
        <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Dokter</th>
          <th>Ruangan</th>
          <th>Keterangan</th>
          <th>Status</th>
          <th>Total pembayaran</th>
          
        </tr>
      </thead>
      <tbody>
        {pasien.map((data) => (
          <tr key={data.id}>
            <td>{data.nama_pasien}</td>
            <td>{data.id_dokter}</td>
            <td>{data.id_ruangan}</td>
            <td>{data.keterangan}</td>
            <td>{data.status}</td>
            <td>{data.total_pembayaran}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
