
import Styles from '../components/Circle.module.css'

export default function Box() {
    return (
        <>
        <h1>Nossos Médicos:</h1>
        <div className={Styles.grid}>
            <div className={Styles.circle}>
                <div></div>
                <h2>Dr Paulo</h2>
            </div>
        
            <div className={Styles.circle2}>
                <div></div>
                <h2>Dra Marcia</h2>
            </div>

            <div className={Styles.circle3}>
                <div></div>
                <h2>Dr Henrique</h2>
            </div>
        </div>
        </>
    )
}