import { useContext } from "react";
import {  Form, FormGroup, Input } from "reactstrap";
import { TemaContext } from "../App";

function TombolUbahTema() {
  const [tema, ubahTema] = useContext(TemaContext);

  return (
          <>
           <Form>
              <FormGroup switch>
                <Input
                  type="switch"
                  onClick={ubahTema}/>
             </FormGroup>
             <b>{tema}</b>
          </Form>
          </>
         )
}

export default TombolUbahTema;
