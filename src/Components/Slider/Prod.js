import React from 'react';
import img29 from '../../Img/maceta6.png'
import img11 from '../../Img/chophomero.jpg'
import img2 from '../../Img/matefrida.png'
import img43 from '../../Img/vajilla4.png'
import img36 from '../../Img/aroma5.png'


const Prod = () => {

    return(
      <div className="back">
      <div className="container-fluid">
        <h1 className="titulo">Conoce mis productos!! </h1>
      <div className="row">
            <div className="col-md-2">
              <div className="card">
                <div className="pic">
                  <a href="products"><img src={img29} className="img-fluid" alt=""></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="pic">
                  <a href="products"><img src={img11} className="img-fluid" alt=""></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="pic">
                  <a href="products"><img src={img43} className="img-fluid" alt=""></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="pic">
                  <a href="products"><img src={img36} className="img-fluid" alt=""></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="pic">
                  <a href="products"><img src={img2} className="img-fluid" alt=""></img></a>
                </div>
              </div>
            </div>
            
            
            
            

          </div>


      </div>
      
      </div>

          
          


    )



}







export default Prod;