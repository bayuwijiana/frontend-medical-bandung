import { Badge } from "reactstrap";
import Navheader from "./Navheader";

function Header() {
  return (
    <header>
      <h1>
          Meedical
          <Badge color="primary">Bandung</Badge>
      </h1>
      <Navheader />
    </header>
  );
}

export default Header;
