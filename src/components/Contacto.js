import React from 'react'


export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>
      <div className='contactos'>
        

        <form className='contacto-item' action="mailto:hiramguel1993@gmail.com">
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellidos' />
          <input type="text" placeholder='Email' />
          <textarea placeholder='Motivo de contacto'/>
          <input type="submit" value="Enviar"/>

        </form>

        <div className='contacto-item'>
        
          <h3>Correo : hiramguel1993@gmail.com</h3>
          <h3>Telefono : +52 444 110 6294</h3>
          <hr></hr>
          <a  href="https://www.linkedin.com/in/hiram-guel-quiroz/" target='_black'>Mi LinkedIn</a>
          
          <a  href="https://github.com/HiramGuelQuiroz" target='_black'>Mi Github</a>

          <a  href="https://wa.link/poa9av" target='_black'>Whatsapp</a>
          
          
          
        </div>

      </div>

      
      
      
    </div>
  )
}
