import React from 'react'
import "./Pyscho.css";


function Psycho() {
    return (
        <div id='pyscho' className='conteiner-pysco'>

            <div className='conteiner-subempresaP'>
                <h1 className='subempresa'>Psicologia Corporativa</h1>
            </div>
            <div className='conteiner-button'>
                <section className="bg-dark btn-container">
                    <div className="btn-item">
                        <a href="#" className="btn-ghost round" >Contactar</a>
                        <a href="#" className="btn-ghost secundary round" >Ingresar</a>
                    </div>
                </section>
            </div>

        </div>

    )
}

export default Psycho;
