import { Link } from 'react-router-dom'
import logo from './logo_nome.png'

import Styles from './Navbar.module.css'

export default function Navbar () {
    
    return (
        <header className={Styles.header}>
            <div className={Styles.logo}>
            <Link className={Styles.menu} to={"/"}>
                <img src={logo} alt="logo_menu"/>
            </Link>
            </div>
            <div className={Styles.display_menu}>
                <Link className={Styles.menu} to={"/"}>Home</Link>
                <Link className={Styles.menu} to={"/ehospital"}>EHospital</Link>
                <Link className={Styles.menu} to={"/services"}>Serviços</Link>
                <Link className={Styles.menu} to={"/schedules"}>Agendamentos</Link>
                <Link className={Styles.menu} to={"/schedulesList"}>Lista de agendamentos</Link>
            </div>
        </header>
    )
}