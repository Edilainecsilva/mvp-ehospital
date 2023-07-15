
import Carrosel from '../components/galery/Carrosel';
import Card from '../components/Card';
import Box from '../components/Box';
import BoxOpacy from '../components/BoxOpacy';

export default function Home() {
    
    
    return (
        <div>
            <section className='carrosel'>
                <Carrosel />
            </section>

            <section className='card'>
                <Card />
            </section><br></br>

            <section className='box'>
                <h1 style={{marginTop: "50px", marginBottom: "80px"}}>NOSSOS SERVIÇOS</h1>
                <Box />
            </section>

            <div >
                <p style={{width: "80%", margin: "50px auto", fontWeight: 'bold'}}>Lorem ipsum dolor sit amet consectetur. Sem etiam massa et donec neque nulla libero. 
                    Aliquet maecenas elementum massa felis vivamus eget sed ut
                    euismod. Imperdiet dolor eget ultricies donec mollis. Dapibus enim vestibulum
                    congue nisl nunc urna turpis tristique.Vel eu lectus sodales commodo. Dui commodo 
                    sit nulla ut accumsan arcu neque. Vitae adipiscing massa est id eget nunc eget. 
                    Vulputate facilisis sit sed necut. Vestibulum sit duis velit mauris. Nunc justo 
                    nec volutpat ac. Tortor volutpat eu nulla diam purus libero urna. Posuere habitasse 
                    accumsan aliquam in a facilisis. Ligula eu quis in amet nibh nulla. 
                    Tortor imperdiet lorem id auctor ac laoreet tincidunt convallis turpis. Iaculis 
                    velit elementum pellentesque vestibulum faucibus at sem. Vel netus nibh semper 
                    scelerisque eget convallis quam curabitur ut. Ipsum placerat nam egestas dolor neque phasellus et.
                    Lectus consectetur nec sed convallis consectetur arcu vitae sed. Magna vitae at nunc lobortis egestas.
                </p>
            </div>

            <section>
                <div>
                    <BoxOpacy />
                </div>
            </section><br></br>
        </div>
    )
}