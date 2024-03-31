import React from 'react';
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {
  return (
    <div className='home'>
      <h1> Hola mi nombre es <strong>Hiram Guel</strong> y soy un desarrollador <strong>web</strong> entusiasta egresado de la Universidad Politécnica de San
           Luis Potosí y me especializo en tecnologías de programacion
           web.
      </h1>

      <h2 className='title'>
        Dejame ayudarte a trabajar en tus paginas web. <Link to="/contacto">Contacta conmigo.</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Mis proyectos</h2>
        <p>Estos son algunos de mis trabajos</p>

        <ListadoTrabajos limite="2"></ListadoTrabajos>
          
        
      </section>
    </div>
  )
}
