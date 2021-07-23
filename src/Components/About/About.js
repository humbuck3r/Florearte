import React from 'react';
import aboutpic from '../../Img/florabout.JPG'
import aboutinfo from '../../Img/flormanos.JPG'
import aboutmaceta from '../../Img/aboutmaceta.JPG'

const About =() =>{
    return(
        
        <div className="container">
            <img src={aboutpic} alt=""className="about-pic1"></img>
        <p>Soy Florencia Albornoz, tengo 27 años, nací en el Este de la provincia de Mendoza y actualmente vivo en el departamento de Godoy Cruz en dónde tengo mi taller. Comencé a estudiar la Tecnicatura Superior en Producción Artística Artesanal, los dos primeros años en el Instituto de Formación Docente y Técnica N° 9-006 Profesor Francisco Humberto Tolosa de Rivadavia, Mendoza. Y finalice el cursado en el Instituto IES 9002 Tomas Godoy Cruz de ciudad. Actualmente estoy transitando 3er año del Profesorado de Artes Visuales en el Instituto de Formación Docente y Técnica El Bicentenario, además de ser bastante autodidacta. Tengo un taller en mi hogar, un espacio dónde me permito disfrutar de la creación de diversas piezas jugando con las arcillas, pigmentos, engobes y esmaltes. Experimentar en el recorrido de cada nueva pieza, las variedades de formas y figuras que nacen, los diversos colores y técnicas de esmaltados que voy aplicando. 
        Todos los trabajos los realizo a pedido y voy incorporando a la producción las nuevas propuestas que surgen. En los talleres trato de transmitir ese amor por el barro y lograr experimentar esa sensación a la hora de encontrarnos con la arcilla.
       
        </p>
        <img src={aboutinfo} alt=""className="about-pic"></img>
        <p>Desconexión, concentración, paciencia, son conceptos que me surgen al hablar y pensar en cerámica. 
        Monte mi taller en mi hogar, donde trabajo hace ya 4 años. Ocupo también un espacio en Casa Abril, un centro terapéutico ubicado en la ciudad de Mendoza dando talleres de cerámica inicial, como así también en Cultural Palmira. Y en mi propio taller. 
        Me gusta pensar en este espacio en dónde muestro al mundo lo que más me apasiona, la cerámica de autor. Realizo piezas funcionales, utilitarias personalizadas por encargo.
        Cuando me encuentro con el barro, se crea un ambiente de meditación, una desconexión con el exterior. La idea es utilizar el arte como medio principal de comunicación, ya que ayuda a poder canalizar y comunicar los sentimientos. 
        La cerámica es el arte de fabricar objetos con arcillas. La arcilla y la barbotina es tierra construida por agregados de silicatos de aluminio hidratados, de color blanco en estado puro y que al mezclarla con agua forma una materia muy plástica que al cocinarla se endurece.
        Al ser algo que perdura en el tiempo, nos ha servido para poder conocer las características de las culturas. Es un arte muy importante en nuestra humanidad.</p>
            <img src={aboutmaceta} alt=""className="about-pic"></img>
        </div>
    )
}



export default About;