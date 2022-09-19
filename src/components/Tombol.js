import { Button } from "reactstrap";
function Tombol(props) {
  return (
    <Button
      style={{
        padding: "12 16",
        borderRadius: 20,
        color: "white",
        backgroundColor: props.warna,
        border: 0
      }}
      onClick={props.onKlik}
    >
      {props.children}
    </Button>
  );
}

export default Tombol;
