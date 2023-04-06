import React,{useEffect, useState} from 'react'
import { microscope } from '../assets/imgs'
import { logo } from '../assets/imgs';
import "./Landing.css";

function Landing() {

  const [scroll, setScroll] = useState(0);
  const [headerClass, setHeaderClass] = useState("");


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const scrollValue = window.pageYOffset;
    setScroll(scrollValue);
    console.log(scroll)
    if(scrollValue > 50){
      setHeaderClass("sticky")
    }else {
      setHeaderClass("")
    }
  }


  return (
    <div className='container-landing'>

      <header className={`logoname ${headerClass}`}>
        <img className='logo' src={logo} alt="" />
        <h1 className='brand-name'>Health Corp</h1>
        <nav className='navbar'>
          <ul>
            <li className='lista'><a href='#nucleo' >Nucleo Lab</a></li>
            <li className='lista'><a href='#eye' >Oftalmo Empresa</a> </li>
            <li className='lista'><a href='#pyscho' >Psicologia Corporativa</a></li>
            <li className='lista'><a href='#nutri' >Nutricion y Empresa</a></li>
            <li className='lista'><a href='#physio' >Physio Empresa</a></li>
          </ul>
        </nav>
      </header>



      {/* <h3>Contacto</h3> */}

      <div id='nucleo' className='conteiner-subempresa'>
        <h1 className='subempresa'>Nucleo Lab</h1>
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

export default Landing