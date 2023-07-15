import { Link } from 'react-router-dom'
import logo from './logo_nome.png'

import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Styles from './Footer.module.css'

export default function Footer () {
    
    return (
        
        <div>
        <div className={Styles.footer}>
            <section>
                <div className={Styles.footer_box}>
                    <div className={Styles.logo}>
                        <Link className={Styles.menu} to={"/"}>
                            <img src={logo} alt="logo_menu" height={100} width={100} />
                        </Link>
                    </div>
                    <p className={Styles.footer_p}>Lorem ipsum dolor sit amet consectetur. 
                        Nec mattis dui sit massa accumsan ultricies. Lectus odio egestas at fames. 
                        Nullam nisi nisi odio a vitae diam tristique faucibus.
                    </p>
                </div>
            </section>

            <section className={Styles.footer_box}>
                <div className={Styles.footer_menu}>
                    <h2>NOSSOS SERVIÇOS</h2>
                    <Link className={Styles.menu} to={"/"}>Home</Link>
                    <Link className={Styles.menu} to={"/ehospital"}>EHospital</Link>
                    <Link className={Styles.menu} to={"/services"}>Serviços</Link>
                    <Link className={Styles.menu} to={"/schedules"}>Agendamentos</Link>
                    <Link className={Styles.menu} to={"/schedulesList"}>Lista de Agendamentos</Link>
                </div>      
            </section>

            <section className={Styles.footer_box}>
            <h2>NOS SIGA NAS REDES SOCIAIS</h2><br></br>
                <div className={Styles.footer_social}>
                    <div>
                    <MDBBtn size='lg' floating style={{ backgroundColor: 'blue' }} href='#'>
                        <MDBIcon fab icon='facebook' />
                    </MDBBtn>
                    </div>
                    <div>
                    <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='#'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>
                    </div>
                    <div>
                    <MDBBtn size='lg' floating style={{ backgroundColor: '#31a3d7' }} href='#'>
                        <MDBIcon fab icon='linkedin' />
                    </MDBBtn>
                    </div>
                </div>
            </section>

            <section className={Styles.footer_box}>
                <div>
                    <h2>CONTATO</h2><br></br>
                    <p>Rua Alberto Hungria, 151, Paraíso-SP</p>
                    <p>adm@ehospital.com</p>
                    <p>11 9256-4563</p>
                </div>
            </section>

        </div>

            <footer>
                <p> © 2000-2023 Copyright: EHospital.com </p>
            </footer>

        </div>
    )
}