import React from 'react';
import aboutpic from '../../Img/florabout.JPG'
import aboutinfo from '../../Img/flormanos.JPG'
import aboutmaceta from '../../Img/aboutmaceta.JPG'

const About =() =>{
    return(
        
        <div className="container">
            <img src={aboutpic} alt=""className="about-pic1"></img>
        <p>Soy Florencia Albornoz, tengo 27 años, nací en el Este de la provincia de Mendoza y actualmente vivo en el departamento de Godoy Cruz en dónde tengo mi taller. 
Comencé a estudiar la Tecnicatura Superior en Producción Artística Artesanal, los dos primeros años en el Instituto de Formación Docente y Técnica N° 9-006 Profesor Francisco Humberto Tolosa de Rivadavia. Mendoza. Y finalice el cursado en el instituto IES 9002 Tomas Godoy Cruz de ciudad. Actualmente estoy transitando 3er año del Profesorado de Artes Visuales en el Instituto de Formación Docente y Técnica El Bicentenario, además de ser bastante autodidacta. 
Tengo un taller en mi hogar,  un espacio dónde me permito disfrutar de la creación de todas las piezas. Jugar con las arcillas, pigmentos, engobes y esmaltes. Experimentar en el recorrido de cada nueva pieza, las variedades de formas y figuras que nacen, los diversos colores y técnicas de esmaltados que voy aplicando. 
Todos los trabajos los realizo a pedido y voy incorporando  a la producción las  nuevas propuestas que surgen.
En los talleres trato de transmitir ese amor por el barro y lograr experimentar esa sensación a la hora de encontrarnos con la arcilla.</p>
        <img src={aboutinfo} alt=""className="about-pic"></img>
        <p>Soy Florencia Albornoz, tengo 27 años, nací en el Este de la provincia de Mendoza y actualmente vivo en el departamento de Godoy Cruz en dónde tengo mi taller. 
Comencé a estudiar la Tecnicatura Superior en Producción Artística Artesanal, los dos primeros años en el Instituto de Formación Docente y Técnica N° 9-006 Profesor Francisco Humberto Tolosa de Rivadavia. Mendoza. Y finalice el cursado en el instituto IES 9002 Tomas Godoy Cruz de ciudad. Actualmente estoy transitando 3er año del Profesorado de Artes Visuales en el Instituto de Formación Docente y Técnica El Bicentenario, además de ser bastante autodidacta. 
Tengo un taller en mi hogar,  un espacio dónde me permito disfrutar de la creación de todas las piezas. Jugar con las arcillas, pigmentos, engobes y esmaltes. Experimentar en el recorrido de cada nueva pieza, las variedades de formas y figuras que nacen, los diversos colores y técnicas de esmaltados que voy aplicando. 
Todos los trabajos los realizo a pedido y voy incorporando  a la producción las  nuevas propuestas que surgen.
En los talleres trato de transmitir ese amor por el barro y lograr experimentar esa sensación a la hora de encontrarnos con la arcilla.</p>
            <img src={aboutmaceta} alt=""className="about-pic"></img>
        </div>
    )
}



export default About;