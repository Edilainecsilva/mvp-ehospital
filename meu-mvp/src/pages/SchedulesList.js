import { useState, useEffect } from 'react';

import axios from 'axios';
import { MDBCard,
    MDBCardBody,
    MDBBadge,
    MDBCol,
    MDBRow } from 'mdb-react-ui-kit';

export default function SchedulesList() {

    const [scheduleList, setScheduleList] = useState([])
   

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/agendamentos')
            .then(res => setScheduleList(res.data.agendamentos))
            .catch(error => console.log(error))
    }, [])
    
   const handleDelete = (id, e) =>{
        e.preventDefault();
        if(window.confirm('Você deseja exlcluir esse agendamento?')) {
            axios.delete(`http://127.0.0.1:5000/agendamento?id=${id}`)
            .then((response) => {
                console.log('Deletado!', response)
            }).catch(error => console.log(error))
        }
    }
    
    return (
        <div style={{marginBottom: '70px'}}>
            <div><h1 style={{fontWeight: 'bold', color: 'black', margin: '40px'}}>Lista de Agendamentos</h1></div>
            <section>
                {scheduleList.map((agendamento) => {
                    return (
                        <div key={agendamento.id}>
                            <MDBRow>
                                <MDBCol xl={6} className='mb-4'  style={{margin: 'auto'}}>
                                    <MDBCard>
                                        <MDBCardBody>
                                            <div className='d-flex align-items-center'>
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>{agendamento.nome}</p>
                                                    <p className='text-muted mb-0'>{agendamento.email}</p>
                                                    <p className='text-muted mb-0'>{agendamento.endereco}</p>
                                                    <p className='text-muted mb-0'>{agendamento.telefone}</p>
                                                    <p className='text-muted mb-0'>{agendamento.data}</p>
                                                    <p className='text-muted mb-0'>{agendamento.mensagem}</p>

                                                </div>
                                                
                                                <MDBBadge pill color='success' light 
                                                    style={{margin: 'auto', marginLeft:'80px', width:'100px', padding:'15px'}}>
                                                    EDITAR
                                                </MDBBadge>
                                                <MDBBadge pill color='danger' light 
                                                    style={{margin: 'auto', width:'100px', padding:'15px'}}
                                                    onClick={(e)=>{handleDelete(agendamento.id, e)}}>
                                                    DELETAR
                                                </MDBBadge>
                                            </div>
                     
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </div>
                        ) //Final do Return
                        
                    })}
            </section> 
            
                
        </div>
    )
}
