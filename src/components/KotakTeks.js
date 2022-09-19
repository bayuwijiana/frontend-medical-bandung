import { Input, Label } from "reactstrap";

function KotakTeks(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label>{props.judul}</Label>
      <Input
        type={props.jenis}
        placeholder={"Masukkan " + props.judul}
        style={{ padding: 8 }}
        onChange={props.onBerubah}
      />
    </div>
  );
}

export default KotakTeks;
