import React from 'react';
import { useNavigate } from "react-router"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


import Styles from '../components/Box.module.css'
import Imagem_servicos2 from '.././assets/img_servicos2.png'
import Button from '../components/Button'

export default function App() {
  const navigate = useNavigate()

  return (
    <div className={Styles.grid_container}>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={Imagem_servicos2}
            alt='Imagem enfermeira e paciente'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontWeight: "bold", fontSize:"30px"}}>Planos de Saúde</MDBCardTitle>
            <MDBCardText>
            Lorem ipsum dolor sit amet consectetur. Ultricies habitasse scelerisque fringilla quis risus nisi facilisi nullam dolor.
            </MDBCardText>
            <Button onClick={() => navigate('/schedules')}/>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={Imagem_servicos2}
            alt='Imagem enfermeira e paciente'
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontWeight: "bold", fontSize:"30px"}}>Exames</MDBCardTitle>
            <MDBCardText>
            Lorem ipsum dolor sit amet consectetur. Ultricies habitasse scelerisque fringilla quis risus nisi facilisi nullam dolor.
            </MDBCardText>
            <Button onClick={() => navigate('/schedules')}/>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={Imagem_servicos2}
            alt='Imagem enfermeira e paciente'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontWeight: "bold", fontSize:"30px"}}>Agendamentos</MDBCardTitle>
            <MDBCardText>
            Lorem ipsum dolor sit amet consectetur. Ultricies habitasse scelerisque fringilla quis risus nisi facilisi nullam dolor.
            </MDBCardText>
            <Button onClick={() => navigate('/schedules')}/>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}