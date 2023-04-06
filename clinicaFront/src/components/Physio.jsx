import React from 'react'
import './Physio.css'

function Physio  ()  {
  return (
    <div id='physio' className='container-physio'>
        <div className='conteiner-subempresaP'>
                <h1 className='subempresa'>Physio Empresa</h1>
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

export default Physio