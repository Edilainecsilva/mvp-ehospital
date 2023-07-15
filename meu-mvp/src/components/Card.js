import React from 'react';
import { useNavigate } from "react-router"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

import Styles from '../components/Card.module.css'

export default function App() {
  const navigate = useNavigate()

  return (
    <div className={Styles.card}>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize: "25px", fontWeight: "bold"}}>Faça já seu agendamento </MDBCardTitle>
        <MDBCardText style={{width: "50%", textAlign: 'center', margin: "auto"}}>
        Lorem ipsum dolor sit amet consectetur. Mollis mi ornare erat vitae. Morbi est eget urna tellus turpis.
        Pulvinar vehicula facilisis fermentum fringilla sed cras ullamcorper. Eu arcu ullamcorper.
        Ultricies habitasse scelerisque fringilla quis risus nisi facilisi nullam dolor eu mi ornare erat vitae.
        </MDBCardText><br></br>
        <MDBBtn onClick={() => navigate('/schedules')} style={{margin:'auto', width:'10%'}}>Clique aqui</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}