
import Styles from './BoxOpacy.module.css'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useNavigate } from "react-router"

export default function BoxOpacy() {
    const navigate = useNavigate()

    return (
        <>
        <div className={Styles.background}>
            <div className={Styles.transbox}>
                <h2>Faça já seu agendamento </h2>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. 
                    Proin amet arcu morbi ultricies sapien. Elementum nulla in aliquet risus. Proin amet arcu
                    morbi ultricies sapien. Elementum nulla in aliquet risus.Lorem ipsum dolor sit amet consectetur. 
                    Proin amet arcu morbi ultricies sapien. Elementum nulla in aliquet risus.
                    Lorem ipsum dolor sit amet consectetur. Proin amet arcu morbi ultricies sapien. 
                    Elementum nulla in aliquet risus.</p>
                    <MDBBtn className='me-1' color='success' onClick={() => navigate('/schedules')}>
                        Clique aqui
                    </MDBBtn>
            </div>
        </div>
        </>
    )
}