import React from 'react'
import './Eye.css'

function Eye() {
    return (
        <div id='eye' className='container-eye'>
            
            <div className='conteiner-subempresaP'>
                <h1 className='subempresa'>Oftalmo Empresa</h1>
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

export default Eye
