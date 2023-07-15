import Circle from '../components/Circle'
import Paragraph from '../components/Paragraph'
import banner_4 from '../assets/banner_4.png'

export default function Ehospital () {
    
    return (
        <div>
            <section>
                <div>
                    <h1 style={{fontWeight: 'bold', color: 'black'}}>Sobre EHOSPITAL</h1><br></br>
                    <img src={banner_4} alt='imagens do hospital'></img>
                </div>
            </section>

            <section>
                <div>
                    <Paragraph />
                </div>
            </section>

            <section>
                <div>
                    <div>
                        <Circle />
                    </div>
                </div>
            </section>
        </div>
    )
}
