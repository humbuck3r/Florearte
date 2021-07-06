import React from 'react';
import taza from '../../Img/taza.jpg'
import tazagrande from '../../Img/tazagrande.jpg'
import tetas from '../../Img/tetas.jpg'
import picada from '../../Img/picada.jpg'



const Prod = () => {

    return(
      <div className="back">
      <div className="container-fluid">
        <h1 className="titulo">Conoce mis productos!! </h1>
      <div className="row">
            <div className="col-md-2">
              <div className="card">
                <div className="pic">
                  <a href="products"><img src={taza} className="img-fluid" alt=""></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="pic">
                   <a href="products"><img src={tazagrande} className="img-fluid" alt=""></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="pic">
                   <a href="products"><img src={tetas} className="img-fluid" alt=""></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="pic">
                   <a href="products"><img src={picada} className="img-fluid" alt=""></img></a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="pic">
                  <a href="products"><img src={taza} className="img-fluid" alt=""></img></a>
                </div>
              </div>
            </div>
            
            
            
            

          </div>


      </div>
      
      </div>

          
          


    )



}







export default Prod;